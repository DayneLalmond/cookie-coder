import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      clipboards {
        _id
        code
        topic
      }
    }
  }
`;

export const QUERY_CLIPBOARDS = gql`
  query getClipboards {
    clipboards {
      _id
      code
      topic
    }
  }
`;

export const QUERY_SINGLE_CLIPBOARD = gql`
  query getSingleClipboard($clipboardId: ID!) {
    clipboard(clipboardId: $clipboardId) {
      _id
      code
      topic
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      clipboards {
        _id
        code
        topic
      }
    }
  }
`;
