import { CHANGE_SELFASSESSMENT } from '../constants/selfAssessment';
const initState: TYPEvitae.certificate = {
  main:'1工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。'
}

export default (preState = initState, action: any) => {
  switch (action.type) {
    case CHANGE_SELFASSESSMENT:
      return action.data;
    default:
      return preState;
  }
}
