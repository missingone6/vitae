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
  const { main } = useSelector((state: any) => state.selfAssessment);

  return (
    <div styleName="resume_content">
      <div>
        <div styleName="module_tit">
          <span>自我评价</span>
        </div>
        <div styleName="ql-editor">
          <p>
            {main}
          </p>
        </div>
      </div>
    </div>
  )
}
export default index;