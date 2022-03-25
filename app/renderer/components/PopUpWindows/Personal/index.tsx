import * as React from 'react';
import { useState } from 'react';
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
  const { name, job, age, sex, location, phone, email } = useSelector((state: any) => state.personal);
  const updateVitaeHook = useUpdateVitaeHook();

  return (
    <>
      <Popup title='个人信息'>
        <ul styleName="content_ul">
          <li>
            <div styleName="left">姓名:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/name', e.target.value || '');
                }}
                defaultValue={name}
              />
            </div>
          </li>
          <li>
            <div styleName="left">求职岗位:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/job', e.target.value || '');
                }}
                defaultValue={job}
              />
            </div>
          </li>
          <li>
            <div styleName="left">你的年龄:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/age', e.target.value || '');
                }}
                defaultValue={age}
              />
            </div>
          </li>
          <li>
            <div styleName="left">你的性别:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/sex', e.target.value || '');
                }}
                defaultValue={sex}
              />
            </div>
          </li>
          <li>
            <div styleName="left">所在地:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/location', e.target.value || '');
                }}
                defaultValue={location}
              />
            </div>
          </li>
          <li>
            <div styleName="left">你的电话:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/phone', e.target.value || '');
                }}
                defaultValue={phone}
              />
            </div>
          </li>
          <li>
            <div styleName="left">你的邮箱:</div>
            <div styleName="right">
              <input type="text"
                onChange={(e) => {
                  updateVitaeHook<string>('personal/email', e.target.value || '');
                }}
                defaultValue={email}
              />
            </div>
          </li>
        </ul>
      </Popup >

    </>
  )

}
export default index;