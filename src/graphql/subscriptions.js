/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
