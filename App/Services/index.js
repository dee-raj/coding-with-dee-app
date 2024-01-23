import { request, gql } from 'graphql-request';
// const MASTER_URL = process.env.Master_URL;
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clr55xt303asb01uq3aikvguz/master";

export const getCourseList = async (level) => {
  const query = gql`
  query CourseList {
    courses(where: {level: `+ level + `}) {
      id
      banner {
        url
      }
      name
      price
      level
      tags
      time
      author
      description {
        markdown
        html
      }
      chapters {
        title
        id
        content {
          heading
          description {
            markdown
            html
          }
          output {
            markdown
            html
          }
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const enrollCourse = async (courseID, userEmail) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {
        userEmail: "`+ userEmail + `", 
        courseId: "`+ courseID + `", 
        course: {
          connect: {id: "`+ courseID + `"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}


export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const getEnrolledUserQuery = gql`
  query GetUserElrolledCourse {
    userEnrolledCourses(
      where: {courseId: "`+ courseId + `", 
        userEmail: "`+ userEmail + `"}
    ) {
      id
      courseId
      completedChapter {
        chapterId
      }
    }
  }
  `
  const result = await request(MASTER_URL, getEnrolledUserQuery);
  return result;
}


export const MarkChapterCompleted = async (chapterId, recordId, userEmail, points) => {
  const mutationQueryForCC = gql`mutation markChapterCompleted {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "`+ chapterId + `"}}}}
      where: {id: "`+ recordId + `"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }

    updateUserDetail(where: {email: "`+ userEmail + `"}, data: {point: ` + points + `}) {
      point
    }
    publishUserDetail(where: {email: "`+ userEmail + `"}) {
      id
    }

  }
  `
  const result = await request(MASTER_URL, mutationQueryForCC);
  return result;
}

export const createNewUser = async (userName, email, profileImageUrl) => {
  const mutationQuery = gql`
  mutation CreateNewUser {
    upsertUserDetail(
      upsert: {create:
        {email: "`+ email + `",
        point: 10,
        profileImage: "`+ profileImageUrl + `",
        userName: "`+ userName + `"}
        update: {email: "`+ email + `",
          profileImage: "`+ profileImageUrl + `",
          userName: "`+ userName + `"}}
      where: {email: "`+ email + `"}
    ){
      id
    }
    publishUserDetail(where: {email: "`+ email + `"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const getUserDetail = async (email) => {
  const query = gql`
  query getUserDetails{
    userDetail(where: 
      {email: "`+ email + `"}){
        point
      }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const GetAllUser = async () => {
  const userDetailQuery = gql`
  query GetAllUsers {
    userDetails(orderBy: point_DESC) {
      id
      profileImage
      userName
      point
    }
  }
  `
  return await request(MASTER_URL, userDetailQuery);
}