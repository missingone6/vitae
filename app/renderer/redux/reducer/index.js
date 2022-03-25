/**
 * 导出所有reducer
 *  */

import { combineReducers } from 'redux';
import addedModule from './addedModule';
import personal from './personal';
import certificate from './certificate';
import selfAssessment from './selfAssessment';
import educational from './educational';
import job from './job';

export default combineReducers({
  addedModule: addedModule,
  personal: personal,
  certificate: certificate,
  selfAssessment: selfAssessment,
  educational: educational,
  job
});