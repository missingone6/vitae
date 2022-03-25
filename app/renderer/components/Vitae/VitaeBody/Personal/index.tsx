import * as React from 'react';
import { useSelector } from 'react-redux';

import HeadPortrait from '../../../common/HeadPortrait';
import '../../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  const { name, job, age, sex, location, phone, email } = useSelector((state: any) => state.personal);

  return (
    <div styleName="basicInfo">
      <div>
        <div>{name}</div>
        <div styleName="row">求职岗位：<span>{job}</span></div>
        <div styleName="row">
          <span>{age}岁</span><span styleName="pd3">|</span>
          <span>{sex}</span><span styleName="pd3">|</span>
          <span>{location}</span>
        </div>
        <div styleName="row">
          <span>{phone}</span><span styleName="pd3">|</span>
          <span>{email}</span>
        </div>

      </div>
      <HeadPortrait/>
    </div>
  )
}
export default index;