import * as React from 'react';
import { shell } from 'electron';
import { useHistory } from "react-router";
import { ROUTER_Array } from '../../common/consts/router';
import isHttpUrl from '../../tools/isHttpUrl';
import bearImgUrl from './images/bear.png'
import '../../../renderer/css/reset.css';
import './index.css';


interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  const history = useHistory();
  const goToUrl = (url: string): void => {
    if (isHttpUrl(url)) {
      shell.openExternal(url);
    } else {
      history.push(url);
    }
  }

  return (
    <div styleName="box">
      <div styleName="local-nav">
        <ul>
          {
            ROUTER_Array.map((value: TYPErouter.Item, index: number) => {
              return (
                <li key={index} onClick={() => { goToUrl(value.url) }}>
                  <span styleName="icon"></span>
                  <span>{value.keyWord}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div styleName="bear-wrapper">
        <div styleName="bear-box">
          <img styleName="bearImg" src={bearImgUrl} alt="小熊" />
        </div>
      </div>
    </div>
  );
}

export default index;