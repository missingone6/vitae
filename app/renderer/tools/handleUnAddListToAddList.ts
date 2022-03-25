import deleteSidebarItem from './deleteSidebarItem';
import addSidebarItem from './addSidebarItem';
/**
 * @description 实现sidebarItem从未添加列表到已添加列表
 * @param addSidebarList 已添加列表
 * @param unAddSidebarList 未添加列表
 * @param sidebarItem 移动项
 * @returns 数组第一项为新的已添加列表，
 *          数组第二项为新的未添加列表，
 */
function handleUnAddListToAddList(
  addSidebarList: TYPEvitae.sidebarItem[],
  unAddSidebarList: TYPEvitae.sidebarItem[],
  sidebarItem: TYPEvitae.sidebarItem
): TYPEvitae.sidebarItem[][] {
  let add = [...addSidebarList];
  let unAdd = [...unAddSidebarList];
  //   1.删除未添加
  unAdd = deleteSidebarItem(unAdd, sidebarItem);
  // 2.插入到已添加列表最后一个
  add = addSidebarItem(add, sidebarItem);
  return [
    add,
    unAdd
  ];

}

export default handleUnAddListToAddList;
