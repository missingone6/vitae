import * as React from 'react';
import { useHistory } from "react-router";
import '../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = () => {
  const history = useHistory();
  return (
    <div styleName="shade">
      <div styleName="box">
        <button styleName='btn' onClick={() => { history.push("/") }}>返回</button>
        <span>TEL:14727967576</span>
      </div>
    </div>
  )

}
export default index;