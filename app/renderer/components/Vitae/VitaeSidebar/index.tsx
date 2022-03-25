import * as React from 'react';
import { useState, useEffect } from 'react';
import { VITAE_SIDEBAR_ARRAY } from '../../../common/consts/vitae'

// redux
import { connect } from 'react-redux';
import { createChangeAddedListAction } from '../../../redux/action/addedModule';

// 发布订阅
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '../../../common/message';
// 封装好的方法
import handleUnAddListToAddList from '../../../tools/handleUnAddListToAddList';
import handleAddListToUnAddList from '../../../tools/handleAddListToUnAddList';
import deleteSidebarItem from '../../../tools/deleteSidebarItem';

import '../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description 
   */
  changeAddedList: Function,
}

const index: React.FC<IProps> = (props) => {
  // const handleDelete = function (arr: TYPEvitae.sidebarItem[], setArr: Function, item: TYPEvitae.sidebarItem, e: React.MouseEvent) {
  //   e.stopPropagation && e.stopPropagation();
  //   let temp = deleteSidebarItem(arr, item)
  //   setArr(temp);
  //   // 将已经添加模块所有keys修改
  //   props.changeAddedList(
  //     temp.map((item: TYPEvitae.sidebarItem) => {
  //       return item.key;
  //     })
  //   );
  // }
  
  const [addSidebarList, setAddSidebarList] = useState<TYPEvitae.sidebarItem[]>([]);
  const [unAddSidebarList, setUnAddSidebarList] = useState<TYPEvitae.sidebarItem[]>([]);

  useEffect(() => {
    if (VITAE_SIDEBAR_ARRAY.length > 0) {
      let add: TYPEvitae.sidebarItem[] = [];
      let unAdd: TYPEvitae.sidebarItem[] = [];
      VITAE_SIDEBAR_ARRAY.forEach((item) => {
        if (item.require) {
          add.push(item);
        } else {
          unAdd.push(item);
        }
      });
      setAddSidebarList(add);
      setUnAddSidebarList(unAdd);

      //已添加列表的key值
      const a: string[] = add.map((item: TYPEvitae.sidebarItem) => {
        return item.key;
      });
      props.changeAddedList(
        a
      );
    }
  }, []);

  return (
    <div styleName="sidebarBox">
      <div styleName="sidebar">
        {
          addSidebarList.length === 0 ? null : <h6>已添加模块</h6>
        }
        <ul>
          {
            addSidebarList.map((item: TYPEvitae.sidebarItem) => {
              return (
                <li key={item.key} onClick={() => {
                  // 发送
                  Messager.send(MESSAGE_EVENT_NAME_MAPS.WHICH_TEMPLATE, {
                    popOut: item.key
                  })
                }}>
                  {item.name}
                  {item.require && <span styleName="must">必</span>}
                  <span styleName="delete"
                    onClick={(e: React.MouseEvent) => {
                      // handleDelete(addSidebarList, setAddSidebarList, item, e)
                      e.stopPropagation();
                      const temp = handleAddListToUnAddList(addSidebarList, unAddSidebarList, item);
                      setAddSidebarList(temp[0]);
                      setUnAddSidebarList(temp[1]);
                      props.changeAddedList(
                        temp[0].map((item: TYPEvitae.sidebarItem) => {
                          return item.key;
                        })
                      );
                    }}>
                    ×
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div styleName="sidebar">
        {
          unAddSidebarList.length === 0 ? undefined : <h6>未添加模块</h6>
        }
        <ul>
          {
            unAddSidebarList.map((item: TYPEvitae.sidebarItem) => {
              return (
                <li key={item.key} onClick={() => {
                  const temp = handleUnAddListToAddList(addSidebarList, unAddSidebarList, item);
                  setAddSidebarList(temp[0]);
                  setUnAddSidebarList(temp[1]);
                  props.changeAddedList(
                    temp[0].map((item: TYPEvitae.sidebarItem) => {
                      return item.key;
                    })
                  );
                }} >
                  {item.name}
                  {item.require && <span styleName="must">必</span>}
                  {/* <span styleName="delete" onClick={(e: React.MouseEvent) => { handleDelete(unAddSidebarList, setUnAddSidebarList, item, e) }}>×</span> */}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )

}


export default connect(
  (state: TYPEstore.all) => ({ addedList: state.addedModule }),
  {
    changeAddedList: createChangeAddedListAction
  }
)(index);
