export const increment = () => {
 
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  
  export const logIn = () => {
    return {
      type: "LOG_IN",
    };
  };
  
  export const logOut = () => {
    return {
      type: "LOG_OUT",
    };
  };
  
  export const credentials = (x) => {
    
    return {
    user:x,
      type: "CREDENTIALS",
    };};
  

    export const blogId  = (x) => {
      return {
        type: x,
      };
    };

    export const postId  = (x) => {
      return {
        type: x,
      };
    };


