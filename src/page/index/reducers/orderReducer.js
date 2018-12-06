import { ORDER_DATA } from '../actions/actionTypes';

const initState = {
  list: []
};

const getOrderDate = (state, action) => {
  return { ...state, list: action.obj.data.digestlist };
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_DATA:
      return getOrderDate(state, action);
    default:
      return state;
  }
};

export default orderReducer;
