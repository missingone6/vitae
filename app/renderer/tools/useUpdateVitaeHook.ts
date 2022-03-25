import { useDispatch, useSelector } from 'react-redux';
//更新redux中的personal
import { CHANGE_PERSONAL } from '../redux/constants/personal';
import { CHANGE_CERTIFICATE } from '../redux/constants/certificate';
import { CHANGE_SELFASSESSMENT } from '../redux/constants/selfAssessment';
import { CHANGE_EDUCATIONAL } from '../redux/constants/educational';
import { CHANGE_JOB } from '../redux/constants/job';

// 引入常量
import { DEFAULT_EDUCATION_INF } from '../common/consts/educational';
import { DEFAULT_JOB_INF } from '../common/consts/job';

/**
 * 更新简历数据的唯一方法
 * @param {stateKey} 如果为'personal/age'，表示修改redux下的personal.age对象
                     如果为'educational/age/0'，表示修改redux下的educational.main[0].age对象
                     如果为'educational/add'，表示往redux下的educational.main对象添加一个新对象
                     如果为'educational/delete/0'，表示删除redux下的educational.main[0]对象
 * @param {stateValue} 要修改成的值
 */

function useUpdateVitaeHook() {
  const updatePersonalHook = useUpdatePersonalHook()
  const updateCertificateHook = useUpdateCertificateHook()
  const updateSelfAssessmentHook = useUpdateSelfAssessmentHook()
  const updateEducationalHook = useUpdateEducationalHook()
  const updateJobHook = useUpdateJobHook()
  return <T>(stateKey: string, stateValue: T | undefined) => {
    console.log(stateKey, stateValue);
    const arr = stateKey.split('/') || [];
    if (arr[0]) {
      switch (arr[0]) {
        case 'personal':
          updatePersonalHook(arr[1], stateValue);
          return;
        case 'certificate':
          updateCertificateHook(arr[1], stateValue);
          return;
        case 'selfAssessment':
          updateSelfAssessmentHook(arr[1], stateValue);
          return;
        case 'educational':
          console.log(arr[0], arr[1], arr[2])
          if (arr[1] === 'add') {
            updateEducationalHook('add')(undefined, undefined, undefined);
          } else if (arr[1] === 'delete') {
            updateEducationalHook('delete')(undefined, undefined, parseInt(arr[2]));
          } else {
            updateEducationalHook('change')(arr[1], stateValue, parseInt(arr[2]));
          }
          return;
        case 'job':
          console.log(arr[0], arr[1], arr[2])
          if (arr[1] === 'add') {
            updateJobHook('add')(undefined, undefined, undefined);
          } else if (arr[1] === 'delete') {
            updateJobHook('delete')(undefined, undefined, parseInt(arr[2]));
          } else {
            updateJobHook('change')(arr[1], stateValue, parseInt(arr[2]));
          }
          return;
        default:
          throw Error('redux error');
      }
    }
  }
}


/**
 * 
 * @description 修改Person组件数据（简单数据 ）
 */
function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const preState = useSelector((state: any) => state.personal);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: CHANGE_PERSONAL,
      data: {
        ...preState,
        [stateKey]: stateValue
      }
    })
  }
}

/**
 * 
 * @description 修改Certificate组件数据（简单数据 ）
 */
function useUpdateCertificateHook() {
  const dispatch = useDispatch();
  const preState = useSelector((state: any) => state.certificate);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: CHANGE_CERTIFICATE,
      data: {
        ...preState,
        [stateKey]: stateValue
      }
    })
  }
}

/**
 * 
 * @description 修改SelfAssessment组件数据（简单数据 ）
 */
function useUpdateSelfAssessmentHook() {
  const dispatch = useDispatch();
  const preState = useSelector((state: any) => state.selfAssessment);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: CHANGE_SELFASSESSMENT,
      data: {
        ...preState,
        [stateKey]: stateValue
      }
    })
  }
}

/**
 * 
 * @description 修改Educational组件数据（复杂数据 ）
 */

// type EducationalKey = "school" | "major" | "startTime" | "endTime" | "grade" | "course";
type EducationalType = "add" | "delete" | "change";
function useUpdateEducationalHook() {
  const dispatch = useDispatch();
  const preState: TYPEvitae.educational = useSelector((state: any) => state.educational);
  let main: TYPEvitae.educationalItem[];
  return (
    type: EducationalType
  ) => <T>(
    stateKey: string | undefined,
    stateValue: T | undefined,
    currentIndex: number | undefined
  ) => {
      if (type === "change" && stateKey !== undefined) {
        main = preState.main.map((item: TYPEvitae.educationalItem, index: number) => {
          if (index === currentIndex) {
            return {
              ...item,
              [stateKey]: stateValue
            }
          }
          return item;
        });
      } else if (type === "add") {
        main = [...preState.main, DEFAULT_EDUCATION_INF];
      } else if (type === "delete" && currentIndex !== undefined) {
        main = preState.main.filter((_, index: number) => index !== currentIndex);
      }
      dispatch({
        type: CHANGE_EDUCATIONAL,
        data: {
          ...preState,
          main: main
        }
      })
    }
}

type JobType = "add" | "delete" | "change";
function useUpdateJobHook() {
  const dispatch = useDispatch();
  const preState: TYPEvitae.job = useSelector((state: any) => state.job);
  let main: TYPEvitae.jobItem[];
  return (
    type: JobType
  ) => <T>(
    stateKey: string | undefined,
    stateValue: T | undefined,
    currentIndex: number | undefined
  ) => {
      if (type === "change" && stateKey !== undefined) {
        main = preState.main.map((item: TYPEvitae.jobItem, index: number) => {
          if (index === currentIndex) {
            return {
              ...item,
              [stateKey]: stateValue
            }
          }
          return item;
        });
      } else if (type === "add") {
        main = [...preState.main, DEFAULT_JOB_INF];
      } else if (type === "delete" && currentIndex !== undefined) {
        main = preState.main.filter((_, index: number) => index !== currentIndex);
      }
      dispatch({
        type: CHANGE_JOB,
        data: {
          ...preState,
          main: main
        }
      })
    }
}
export default useUpdateVitaeHook;