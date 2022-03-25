import { CHANGE_JOB } from '../constants/job';

export function createChangeAddedListAction(value: any) {
  return {
    type: CHANGE_JOB,
    data: value
  }
};