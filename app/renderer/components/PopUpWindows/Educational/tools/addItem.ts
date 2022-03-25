export default function addItem(dataList: TYPEvitae.educationalItem) {
  const newItem = {
    school: '',
    major: '',
    startTime: '',
    endTime: '',
    grade: '',
    course: ''
  };
  return {
    ...dataList,
    newItem
  };
}