import { ORDER_DATA } from './actionTypes';
import axios from 'axios';

export const getOrderData = page => dispatch => {
  let url = `/json/orders.json`;

  axios({
    method: 'get',
    url
  }).then(res => {
    dispatch({
      type: ORDER_DATA,
      currentPage: page,
      obj: res.data
    });
  });
};
