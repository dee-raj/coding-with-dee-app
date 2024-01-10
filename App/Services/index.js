import {request, gql} from 'graphql-request';
// const MASTER_URL = process.env.Master_URL;
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clr55xt303asb01uq3aikvguz/master";

export const getCourseList = async(level)=>{
   const query = gql`
   query CourseList {
      courses(where: {level: `+level+`}) {
        id
        name
        price
        level
        tags
        time
        author
        banner {
          url
        }
        chapters {
          id
        }
        description {
          markdown
          raw
          text
        }
      }
    }
   `
   const result = await request(MASTER_URL, query);
   return result;
} 