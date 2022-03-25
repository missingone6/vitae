import { CHANGE_EDUCATIONAL } from '../constants/educational';

export function createChangeAddedListAction(value: any) {
  return {
    type: CHANGE_EDUCATIONAL,
    data: value
  }
};