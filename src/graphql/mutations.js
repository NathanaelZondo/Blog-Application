/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
