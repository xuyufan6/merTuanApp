import { ORDER_DATA } from '../actions/actionTypes';

const initState = {
  list: []
};

const getOrderDate = (state, action) => {
  if (action.currentPage === 1) {
    return { ...state, list: action.obj.data.digestlist };
  }

  let list = state.list.concat(action.obj.data.digestlist);
  return { ...state, list };
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
