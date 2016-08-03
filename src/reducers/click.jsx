const click = (state={}, action) => {
  const newState = {};
  switch(action.type) {
    case "INCREMENT":
      return {...state, clicks: (state["clicks"]|0) + 1}; 
      break;
    case "DECREMENT":
      return {...state, clicks: (state["clicks"]|0) - 1}; 
      break;
    default:
      return {...state};
      break;
  }
}

export default click;
