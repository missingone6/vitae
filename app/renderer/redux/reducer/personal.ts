import { CHANGE_PERSONAL } from '../constants/personal';
const initState: TYPEvitae.personal = {
  name: '李李',
  job: '前端工程师',
  age: '20',
  sex: '女',
  location: '西安',
  phone: '14727967576',
  email: '1106220565@qq.com',
  photo:''
}

export default (preState = initState, action: any) => {
  switch (action.type) {
    case CHANGE_PERSONAL:
      return action.data;
    default:
      return preState;
  }
}
