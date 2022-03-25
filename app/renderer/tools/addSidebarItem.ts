/**
 * @description 将插入项插入到数组最后
 * @param preSidebarList 原数组
 * @param newSidebarItem 插入项
 * @returns 新数组
 */
function addSidebarItem(
  preSidebarList: TYPEvitae.sidebarItem[],
  newSidebarItem: TYPEvitae.sidebarItem
): TYPEvitae.sidebarItem[] {
  const temp = [...preSidebarList];
  temp.push(newSidebarItem);
  return temp;
}

export default addSidebarItem;
