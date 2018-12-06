import { LIST_DATA } from '../actions/actionTypes';

const initState = {
  list: []
};

const getListDate = (state, action) => {
  if (action.currentPage === 1) {
    return { ...state, list: action.obj.data.poilist };
  }
  
  let list = state.list.concat(action.obj.data.poilist);
  return { ...state, list };
};

const contentListReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_DATA:
      return getListDate(state, action);
    default:
      return state;
  }
};

export default contentListReducer;
