/**
 * @description 删除preSidebarList里值为SidebarItem的，并返回新数组
 * @param preSidebarList 原数组
 * @param sidebarItem 要删除的项
 * @returns 新数组
 */

function deleteSidebarItem(
  preSidebarList: TYPEvitae.sidebarItem[],
  sidebarItem: TYPEvitae.sidebarItem
): TYPEvitae.sidebarItem[] {
  const temp = [...preSidebarList];
  return temp.filter(item => item !== sidebarItem);
}

export default deleteSidebarItem;
