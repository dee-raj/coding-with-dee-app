import { request, gql } from 'graphql-request';
// const MASTER_URL = process.env.Master_URL;
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clr55xt303asb01uq3aikvguz/master";

export const getCourseList = async (level) => {
  const query = gql`
  query CourseList {
    courses(where: {level: `+ level +`}) {
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
      }
      chapters {
        title
        id
        content {
          heading
          description {
            markdown
          }
          output {
            markdown
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
        userEmail: "`+userEmail+`", 
        courseId: "`+courseID+`", 
        course: {
          connect: {id: "`+courseID+`"}}}
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


export const getUserEnrolledCourse = async (courseId, userEmail) =>{
  const getEnrolledUserQuery = gql`
  query GetUserElrolledCourse {
    userEnrolledCourses(
      where: {courseId: "`+courseId+`", 
        userEmail: "`+userEmail+`"}
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
