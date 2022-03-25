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
  const { main } = useSelector((state: any) => state.certificate);
  const textareaEle = useRef(null);
  useEffect(() => {
    // 给textarea添加默认值value
    textareaEle!.current!.value = main;
  }, [])
  return (
    <>
      <Popup title='荣誉证书'>
        <textarea ref={textareaEle} name="honor" styleName="textareaEle" placeholder="你获得的荣誉" onChange={(e) => {
          updateVitaeHook<string>('certificate/main', e.target.value || '');
        }}></textarea>
      </Popup >
    </>
  )

}
export default index;