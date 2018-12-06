import { ADD_TODO, CHANGE_TAB } from './actionTypes';

export const addTodo = obj => ({
  type: ADD_TODO,
  obj
});

export const changeTab = obj => ({
  type: CHANGE_TAB,
  obj
});
