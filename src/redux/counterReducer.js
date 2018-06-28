//initial state
const initialState = {
  count: 5
  //   name: "Ben"
};

// action types
const ADD_COUNT = "ADD_COUNT";
const DECREASE = "DECREASE";

// action creators
export function handleIncrease(num) {
  return {
    type: ADD_COUNT,
    payload: num
  };
}

export function handleDecrease(num) {
  return {
    type: DECREASE,
    payload: num
  };
}

//reducer function
export default function counterReducer(state = initialState, action) {
  //   return state;
  switch (action.type) {
    case ADD_COUNT:
      return {
        count: state.count + action.payload
      };
    case DECREASE:
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
}
