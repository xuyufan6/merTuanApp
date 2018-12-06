import { LIST_DATA } from './actionTypes';
import axios from 'axios';

export const getListData = page => dispatch => {
  let url = `/json/homelist${page}.json`;

  if (page === 1) {
    url = `/json/homelist.json`;
  }

  axios({
    method: 'get',
    url
  }).then(res => {
    dispatch({
      type: LIST_DATA,
      currentPage: page,
      obj: res.data
    });
  });
};
