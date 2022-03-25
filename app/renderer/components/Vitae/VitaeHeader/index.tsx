import * as React from 'react';
import { useHistory } from "react-router";
import '../../../../renderer/css/reset.css';
import { toPrintPdf } from '../../../tools/htmlToPdf';
import './index.css';

interface IProps {
  /**
   * @description 
   */
}

const index: React.FC<IProps> = (props) => {
  const history = useHistory();
  return (
    <div styleName="header">
      <button styleName="fl" onClick={() => { history.push("/") }}>返回</button>
      <button styleName="fr" onClick={() => {
        toPrintPdf('简历');
      }}>导出PDF</button>
    </div>
  )

}
export default index;