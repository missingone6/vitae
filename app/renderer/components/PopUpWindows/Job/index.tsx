import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../../common/Popup';
import Left from './Left';
import Right from './Right';
import '../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */

}

const index: React.FC<IProps> = (props) => {
  const { main } = useSelector((state: any) => state.job);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(main[0]);
  const leftList = main.map((item: TYPEvitae.jobItem) => item.company);

  useEffect(() => {
    setCurrentItem(main[currentIndex]);
  }, [currentIndex])

  return (
    <>
      <Popup title='工作经验'>
        <Left leftList={leftList} currentIndex={currentIndex} onChangeCurrentIndex={(newIndex: number) => setCurrentIndex(newIndex)} />
        <Right currentItem={currentItem} currentIndex={currentIndex} />
      </Popup>
    </>
  )
}

export default index;