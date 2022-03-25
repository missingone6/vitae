import { CHANGE_CERTIFICATE } from '../constants/certificate';
const initState: TYPEvitae.certificate = {
  main:'英语四级，听说读写能力良好，能流利的用英语进行日常交流，能快速浏览英文文档和书籍\n通过全国计算机二级考试，熟练运用office等常用的办公软件。'
}

export default (preState = initState, action: any) => {
  switch (action.type) {
    case CHANGE_CERTIFICATE:
      return action.data;
    default:
      return preState;
  }
}
