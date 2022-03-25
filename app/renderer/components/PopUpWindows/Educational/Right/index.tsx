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
  currentItem: TYPEvitae.educationalItem
  /**
   * @description 当前项目序号
   */
  currentIndex: number
}



const index: React.FC<IProps> = ({ currentItem, currentIndex }) => {
  const { main } = useSelector((state: any) => state.educational);
  const { school, major, startTime, endTime, grade, course } = main[currentIndex];

  const textareaEle = useRef<HTMLTextAreaElement>(null);
  const updateVitaeHook = useUpdateVitaeHook();


  useEffect(() => {
    // 给textarea添加默认值value
    if (textareaEle.current) {
      textareaEle.current.value = course;
    }
  }, [currentItem]);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    key: string) => {
    updateVitaeHook<string>(`educational/${key}/${currentIndex}`, e.target.value || '');
  }

  return (
    <>
      <div styleName="rightContent">
        <ul styleName="content_ul">
          <li>
            <div styleName="left">学校：</div>
            <div styleName="right">
              <input type="text" value={school} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'school');
              }} />
            </div>
          </li>
          <li>
            <div styleName="left">专业：</div>
            <div styleName="right">
              <input type="text" value={major} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'major')
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
            <div styleName="left">专业成绩：</div>
            <div styleName="right">
              <input type="text" value={grade} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e, 'grade')
              }} />
            </div>
          </li>
          <li>
            <div styleName="left">主修课程：</div>
            <div styleName="right w172">
              <textarea ref={textareaEle} styleName="textareaEle" placeholder="你的专业课程"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  handleOnChange(e, 'course')
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