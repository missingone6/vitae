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
  const { main } = useSelector((state: any) => state.educational);

  return (
    <div styleName="resume_content">
      <div  >
        <div styleName="module_tit"><span>教育背景</span></div>
        {
          main.map((item: any) => {
            const { school, major, startTime, endTime, grade, course } = item;
            return (
              <div styleName="content_list">
                <ul styleName="list_top">
                  <li styleName="time">{startTime} ~ {endTime}</li>
                  <li styleName="name"><b>{school}</b></li>
                  <li>{major}</li>
                </ul>
                <div styleName="ql-editor" >
                  <p><strong>专业成绩：</strong>{grade}</p>
                  <p>
                    <strong>主修课程：</strong>
                    {course}
                  </p>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>

  )
}
export default index;