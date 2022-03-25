import * as React from 'react';
import useUpdateVitaeHook from '../../../../tools/useUpdateVitaeHook';
import '../../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 展示列表
   */
  leftList: string[];
  /**
   * @description 修改选中索引
   */
  onChangeCurrentIndex: Function
  /**
   * @description 选中索引
   */
  currentIndex: number
}



const index: React.FC<IProps> = ({ leftList, onChangeCurrentIndex, currentIndex }: IProps) => {
  const updateVitaeHook = useUpdateVitaeHook();

  return (
    <>
      <div styleName="leftContent">
        <div styleName="addBox">
          <button onClick={() => {
            updateVitaeHook<undefined>(`educational/add/`, undefined);
          }}>添加</button>
        </div>
        <ul>
          {
            leftList.map((item: string, index: number) => {
              return (
                <li key={index} onClick={() => {
                  onChangeCurrentIndex(index);
                }}>
                  <span styleName='hide'>{item}</span>
                  <span styleName='fr' onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                    e.stopPropagation();
                    updateVitaeHook<undefined>(`educational/delete/${currentIndex}`, undefined);
                  }}>×</span>
                </li>
              )
            })
          }
        </ul>
      </div>

    </>
  )
}

export default index;