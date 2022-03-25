import * as React from 'react';
import { useSelector } from 'react-redux';
import '../../../../../renderer/css/reset.css';

import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  const { main } = useSelector((state: any) => state.certificate);

  return (
    <div styleName="resume_content" >
      <div>
        <div styleName="module_tit" >
          <span>荣誉证书</span>
        </div>
        <div styleName="ql-editor" >
          <ul styleName="listStyleCircle ">
            {
              (main.split('\n') || []).map((value: string, index: number) => {
                return (
                  <li key={index}>
                    {value}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default index;