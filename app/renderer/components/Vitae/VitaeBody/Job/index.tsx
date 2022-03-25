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
  const { main } = useSelector<any, TYPEvitae.job>((state: any) => state.job);
  return (
    <div styleName="resume_content" >
      <div  >
        <div styleName="module_tit" ><span>工作经验</span></div>
        {
          main.map((item: TYPEvitae.jobItem) => {
            return (
              <div styleName="content_list" >
                <ul styleName="list_top" >
                  <li className="time">{item.startTime} ~ {item.endTime}</li>
                  <li styleName="name" ><b >{item.company}</b></li>
                  <li >{item.position}</li>
                </ul>
                <div styleName="ql-editor">
                  <ul styleName="listStyleCircle">
                    {
                      item.content.split("\n").map((contentItem: string) => {
                        return (
                          <li>
                            {contentItem}
                          </li>
                        )
                      })
                    }
                  </ul>
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