import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useUpdateVitaeHook from '../../../../tools/useUpdateVitaeHook';

import '../../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 当前项目内容
   */
  currentItem: TYPEvitae.jobItem
  /**
   * @description 当前项目序号
   */
  currentIndex: number
}



const index: React.FC<IProps> = ({ currentItem, currentIndex }) => {
  const {
    main
  } = useSelector<any, TYPEvitae.job>(state => state.job);
  const { 
    company,
    position,
    startTime,
    endTime,
    content
  } = main[currentIndex];

  const textareaEle = useRef<HTMLTextAreaElement>(null);
  const updateVitaeHook = useUpdateVitaeHook();


  useEffect(() => {
    // 给textarea添加默认值value
    if (textareaEle.current) {
      textareaEle.current.value = content;
    }
  }, [currentItem]);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    key: string) => {
    updateVitaeHook<string>(`job/${key}/${currentIndex}`, e.target.value || '');
  }

  return (
    <>
      <div styleName="rightContent">
        <ul styleName="content_ul">
          <li>
            <div styleName="left">公司：</div>
            <div styleName="right">
              <input type="text" value={company} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'company');
              }} />
            </div>
          </li>
          <li>
            <div styleName="left">职位</div>
            <div styleName="right">
              <input type="text" value={position} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'position')
              }} />
            </div>
          </li>
          <li>
            <div styleName="left">时间：</div>
            <div styleName="right">
              <input type="text" styleName="w172" value={startTime} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'startTime')
              }} />
              <span>-</span>
              <input type="text" styleName="w172" value={endTime} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'endTime')
              }} />
            </div>
          </li>
          <li>
            <div styleName="left">工作内容：</div>
            <div styleName="right w172">
              <textarea ref={textareaEle} styleName="textareaEle" placeholder="你的专业课程"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  handleOnChange(e, 'content')
                }}
              ></textarea>
            </div>
          </li>
        </ul>
      </div>


    </>
  )
}

export default index;