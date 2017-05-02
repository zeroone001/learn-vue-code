/*

3. Action 
state 的变化会导致view的变化，state的变化是view导致的。
Action就是view发出的通知，表示state应该变化了；
const action = {
    type: 'name'
}
type是必须的，表示名称
action会运送数据到store
4. store.dispatch()
是view发出action的唯一方法

import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
    type:''
})
6. state 的计算过程就叫做Reducer
reducer 是一个函数
const reducer = function (state, action) {
  // ...
  return new_state;
};
8. store.subscribe()











*/