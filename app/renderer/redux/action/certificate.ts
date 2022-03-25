import { CHANGE_CERTIFICATE } from '../constants/certificate';

export function createChangeAddedListAction(value: any) {
  return {
    type: CHANGE_CERTIFICATE,
    data: value
  }
};