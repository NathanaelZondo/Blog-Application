/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      user
      name
      blogpicture
      description
      posts {
        items {
          id
          title
          user
          postpicture
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        name
        blogpicture
        description
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        user
        name
        blogpicture
        description
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      user
      postpicture
      comments {
        items {
          id
          user
          content
          uid
          userpicture
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
      blogPostsId
      createdAt
      id
      postpicture
      title
      updatedAt
      user
      comments {
        items {
          content
          createdAt
          id
          postCommentsId
          uid
          updatedAt
          user
          userpicture
        }
      }
    }
  }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      user
      post {
        id
        title
        blog {
          id
          user
          name
          blogpicture
          description
          createdAt
          updatedAt
        }
        user
        postpicture
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      uid
      userpicture
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        post {
          id
          title
          user
          postpicture
          createdAt
          updatedAt
          blogPostsId
        }
        content
        uid
        userpicture
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
