import { createStore, applyMiddleware } from 'redux';
// 支持异步（函数）action
import thunk from 'redux-thunk';
// 调试工具
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducer from './reducer/index';

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
 