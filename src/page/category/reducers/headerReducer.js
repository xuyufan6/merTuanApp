import { TABKEY } from '../config';

const tabs = {
  [TABKEY.cate]: {
    key: TABKEY.cate,
    text: '全部分类',
    obj: {}
  },
  [TABKEY.type]: {
    key: TABKEY.type,
    text: '综合排序',
    obj: {}
  },
  [TABKEY.filter]: {
    key: TABKEY.filter,
    text: '筛选',
    obj: {}
  }
};

// 初始化state
const initState = {
  tabs,
  activeKey: TABKEY.cate // 当前选中tab
};

const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case 1:
      return null;
    default:
      return state;
  }
};

export default headerReducer;
