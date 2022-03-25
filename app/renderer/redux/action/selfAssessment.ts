import { CHANGE_SELFASSESSMENT } from '../constants/selfAssessment';

export function createChangeAddedListAction(value: any) {
  return {
    type: CHANGE_SELFASSESSMENT,
    data: value
  }
};