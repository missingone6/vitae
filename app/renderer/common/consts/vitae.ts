// 生成唯一标识
import { nanoid } from 'nanoid';

export const VITAE_SIDEBAR_OBJ = {
  personal: '个人信息',
  educational: '教育背景',
  job: '工作经验',
  certificate: '荣誉证书',
  selfAssessment: '自我评价'
}
export const VITAE_SIDEBAR_KEYS = {
  personal: nanoid(),
  educational: nanoid(),
  job: nanoid(),
  certificate: nanoid(),
  selfAssessment: nanoid()
}

export const VITAE_SIDEBAR_ARRAY: TYPEvitae.sidebarItem[] = [
  {
    name: VITAE_SIDEBAR_OBJ.personal,
    key: VITAE_SIDEBAR_KEYS.personal,
    require: true
  },
  {
    name: VITAE_SIDEBAR_OBJ.educational,
    key: VITAE_SIDEBAR_KEYS.educational,
    require: true
  },
  {
    name: VITAE_SIDEBAR_OBJ.job,
    key: VITAE_SIDEBAR_KEYS.job,
    require: false
  },
  {
    name: VITAE_SIDEBAR_OBJ.certificate,
    key: VITAE_SIDEBAR_KEYS.certificate,
    require: false
  },
  {
    name: VITAE_SIDEBAR_OBJ.selfAssessment,
    key: VITAE_SIDEBAR_KEYS.selfAssessment,
    require: false
  },

];

