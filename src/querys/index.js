import gql from 'graphql-tag';

export const FETCH_QUERY_OTHER = gql`
  {
    cities {
      name
    }
  }
`;
export const FETCH_QUERY = gql`
  {
    allPeople(last: 6) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
