import * as React from 'react';
import { useEffect } from 'react';
// redux
import { connect, useDispatch, useSelector } from 'react-redux';
// 发布订阅
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '../../../common/message';
// 引入其他组件
import Personal from './Personal';
import Educational from './Educational';
import Job from './Job';
import Certificate from './Certificate';
import SelfAssessment from './SelfAssessment';
import '../../../../renderer/css/reset.css';
import './index.css';

// 引入弹窗组件
import P_Personal from '../../PopUpWindows/Personal';
import P_Educational from '../../PopUpWindows/Educational';
import P_Certificate from '../../PopUpWindows/Certificate';
import P_SelfAssessment from '../../PopUpWindows/SelfAssessment';
import P_Job from '../../PopUpWindows/Job';

// 引入常量
import { VITAE_SIDEBAR_KEYS } from '../../../common/consts/vitae';
interface IProps {
  /**
   * @description 
   */
  // addedList: string[]

}

const index: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const [popOut, setPopOut] = React.useState('');
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.WHICH_TEMPLATE, received)
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.WHICH_TEMPLATE, received)
    }
  },[]);

  // 接收订阅事件的传参
  const received = (event: any) => {
    Messager.receive(event, (data: any) => {
      setPopOut(data.popOut);
      console.log('发布订阅，传参值为: ', data);
    })
  }

  // 获取工具条模块 keys
  // const addedListKeys = props.addedList;
  // 获取工具条模块 keys
  const addedListKeys = useSelector((state: TYPEstore.all) => state.addedModule)||[];


  return (
    <>
      <div styleName="resume_content_all" id="visPdf">
        {addedListKeys.includes(VITAE_SIDEBAR_KEYS.personal) && <Personal />}
        {addedListKeys.includes(VITAE_SIDEBAR_KEYS.educational) && <Educational />}
        {addedListKeys.includes(VITAE_SIDEBAR_KEYS.job) && <Job />}
        {addedListKeys.includes(VITAE_SIDEBAR_KEYS.certificate) && <Certificate />}
        {addedListKeys.includes(VITAE_SIDEBAR_KEYS.selfAssessment) && <SelfAssessment />}
      </div>
      <div>
        {popOut === (VITAE_SIDEBAR_KEYS.personal) && <P_Personal/>}
        {popOut === (VITAE_SIDEBAR_KEYS.educational) &&  <P_Educational/>}
        {popOut === (VITAE_SIDEBAR_KEYS.certificate) && <P_Certificate />}
        {popOut === (VITAE_SIDEBAR_KEYS.selfAssessment) && <P_SelfAssessment />}
        {popOut === (VITAE_SIDEBAR_KEYS.job) && <P_Job />}
        
      </div>
    </>

  )

}
export default index;
// export default connect(
//   (state: TYPEstore.all) => ({ addedList: state.addedModule }),
//   {

//   }
// )(index);
