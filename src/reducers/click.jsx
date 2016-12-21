export const click = (state={}, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {...state, clicks: (state["clicks"]|0) + 1}; 
    case "DECREMENT":
      return {...state, clicks: (state["clicks"]|0) - 1}; 
    default:
      return {...state};
  }
}
