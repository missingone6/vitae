import { CHANGE_ADDEDLIST } from '../constants/addedModule';

export function createChangeAddedListAction(value: any) {
  return {
    type: CHANGE_ADDEDLIST,
    data: value
  }
};