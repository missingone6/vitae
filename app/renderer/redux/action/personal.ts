import { CHANGE_PERSONAL } from '../constants/personal';

export function createChangePersonalAction(value: any) {
  return {
    type: CHANGE_PERSONAL,
    data: value
  }
};