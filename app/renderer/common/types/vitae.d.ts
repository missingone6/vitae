declare namespace TYPEvitae {
  interface sidebarItem {
    /**
     * @description 关键字
     */
    key: string
    /**
    * @description 主题
    */
    name: string
    /**
    * @description 是否是必选项
    */
    require: boolean
  }
  interface personal {
    name: string
    job: string
    age: string,
    sex: string,
    location: string,
    phone: string,
    email: string,
    photo: string
  }
  interface certificate {
    main: string
  }
  interface educational {
    main: educationalItem[]
  }
  interface educationalItem {
    school: string,
    major: string,
    startTime: string,
    endTime: string,
    // 专业成绩
    grade: string,
    // 主修课程
    course: string
  }

  interface job {
    main: jobItem[]
  }
  interface jobItem {
    company: string,
    position: string,
    startTime: string,
    endTime: string,
    content: string
  }
}
