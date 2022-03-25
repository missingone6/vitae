import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../../common/Popup';
import useUpdateVitaeHook from '../../../tools/useUpdateVitaeHook';
import '../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  const updateVitaeHook = useUpdateVitaeHook();
  const { main } = useSelector((state: any) => state.selfAssessment);
  const textareaEle = useRef(null);
  useEffect(() => {
    // 给textarea添加默认值value
    if(textareaEle.current){
      textareaEle.current.value = main;
    }
  }, [])
  return (
    <>
      <Popup title='自我评价'>
        <textarea ref={textareaEle} styleName="textareaEle" placeholder="你对自己的评价" onChange={(e) => {
          updateVitaeHook<string>('selfAssessment/main', e.target.value || '');
        }}></textarea>
      </Popup >
    </>
  )

}
export default index;