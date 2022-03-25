import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useUpdateVitaeHook from '../../../tools/useUpdateVitaeHook';
import '../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description :子组件
   */
  children: React.ReactNode | any;
  /**
   * @description :最大高度
   */
  maxHeight?: number;
  /**
   * @description :标题
   */
  title: string;
  /**
   * @description 根div样式
   */
  style?: React.CSSProperties;
}

const index: React.FC<IProps> = ({ children, maxHeight = 200, title, style = {} }: IProps) => {
  const [shouldShowPopovers, setShouldShowPopovers] = useState(true);

  return (
    <>
      {
        (shouldShowPopovers) && (
          <>
            <div styleName="mask"></div>
            <div styleName="login">
              <div styleName="loginCon">
                <div styleName="header">
                  <div styleName="title">{title}</div>
                  <div styleName="close" onClick={() => {
                    setShouldShowPopovers(false);
                  }}>×</div>
                </div>
                <div styleName="content" style={style}>
                  {children}
                </div>
              </div>
            </div>
          </>
        )
      }

    </>
  )

}
export default index;