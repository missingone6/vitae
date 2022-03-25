import { CHANGE_EDUCATIONAL } from '../constants/educational';
const initState: TYPEvitae.educational = {
  main:[
    {
      school: '西安邮电大学',
      major: '计算机科学与技术',
      startTime: '2019-09',
      endTime: '2023-07',
      // 专业成绩
      grade: 'GPA 3.66/4 （专业前5%）',
      // 主修课程
      course: 'C语言、高等数学、离散数学、线性代数、数据结构、计算机组成原理、微机原理、数字电路、大学物理'
    },
    {
      school: '北京邮电大学',
      major: '计算机科学与技术',
      startTime: '2023-09',
      endTime: '2027-07',
      // 专业成绩
      grade: 'GPA 3.81/4 （专业前1%）',
      // 主修课程
      course: '计算机图形学'
    }
  ]
}

export default (preState = initState, action: any) => {
  switch (action.type) {
    case CHANGE_EDUCATIONAL:
      return action.data;
    default:
      return preState;
  }
}
