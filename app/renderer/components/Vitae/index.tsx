import * as React from 'react';
import VitaeBody from './VitaeBody';
import VitaeHeader from './VitaeHeader';
import VitaeSidebar from './VitaeSidebar';
import '../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  return (
    <div styleName="shade">
      <div styleName="box">
        <div>
          <VitaeHeader />
          <VitaeBody/>
        </div>
        <VitaeSidebar/>
      </div>
    </div>
  )

}
export default index;