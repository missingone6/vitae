import { CHANGE_ADDEDLIST } from '../constants/addedModule';
const initState = new Array();

export default (preState = initState, action:any) => {
  switch (action.type) {
    case CHANGE_ADDEDLIST:
      return action.data;
    default:
      return preState;
  }
} 
 