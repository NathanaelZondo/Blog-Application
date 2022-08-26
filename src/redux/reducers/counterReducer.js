
const counterReducer = (state = { value: 0 }, action) => {
  // console.log('AUCTUN = ',action)
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 }
    case "DECREMENT":
      return { value: state.value - 1 }
    case "RESET":
      return (state = { value: 0 });
    default:
      return state;
  }
};
export default counterReducer;