const click = (state={}, action) => {
  const newState = {};
  switch(action.type) {
    case "INCREMENT":
      newState["clicks"] = (state["clicks"]|0) + 1;
      break;
    case "DECREMENT":
      newState["clicks"] = (state["clicks"]|0) - 1;
      break;
    default:
      break;
  }
  return Object.assign({}, state, newState);
}

export default click;
