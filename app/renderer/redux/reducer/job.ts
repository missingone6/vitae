import { CHANGE_JOB } from '../constants/job';
const initState: TYPEvitae.job = {
  main: [
    {
      company: "全民科技有限公司",
      position: "行政专员",
      startTime: "2018-09",
      endTime: " 至今",
      content: "拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。\n编制公司人事管理制度，规避各项人事风险。"
    }, 
    {
      company: "上海斧掌网络科技有限公司",
      position: "行政助理",
      startTime: "2016-09",
      endTime: " 2018-08",
      content:"负责中心简单财务管理，资产管控；\n负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；\n负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理；"
    }
  ]
}

export default (preState = initState, action: any) => {
  switch (action.type) {
    case CHANGE_JOB:
      return action.data;
    default:
      return preState;
  }
}
