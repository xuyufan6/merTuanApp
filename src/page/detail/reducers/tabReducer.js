import { TABKEY } from '../config';

const initState = {
  tabs: [
    {
      name: '点菜',
      key: TABKEY.menu
    },
    {
      name: '评价',
      key: TABKEY.comment
    },
    {
      name: '商家',
      key: TABKEY.restanurant
    }
  ]
};

const tabReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tabReducer;
