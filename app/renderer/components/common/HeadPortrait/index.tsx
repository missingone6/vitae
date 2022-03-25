import * as React from 'react';
import { useRef } from 'react';
import useUpdateVitaeHook from '../../../tools/useUpdateVitaeHook';
import '../../../../renderer/css/reset.css';
import './index.css';

interface IProps {
  /**
   * @description :默认头像
   */
  defaultAvatar?: string;
  /**
   * @description 根div样式
   */
  style?: React.CSSProperties;
}

const index: React.FC<IProps> = ({ defaultAvatar = "https://www.qmjianli.com/images/edit/man.png" }: IProps) => {

  const inputEle = useRef(null);
  const updateVitaeHook = useUpdateVitaeHook();

  return (
    <>
      <div styleName="photo_box">
        <img src={defaultAvatar} styleName="photo_img" width="100%"/>
        <input type="file" ref={inputEle} accept="image/*" alt="上传" styleName="photo_input" onChange={() => {
          document.getElementsByTagName('img')[0].src = getObjectURL(inputEle!.current!['files'][0]);
          var a = image2Base64(document.getElementsByTagName('img')[0])
          updateVitaeHook<string>('personal/photo', a || '');
        }} />
      </div>
    </>
  )

}

/**
 * {getObjectURL}用于获取本地图片的地址，使用该url可以显示图片
*/
function getObjectURL(file: object) {
  var url = null;
  if (window.createObjectURL != undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
/**
 * 图片转base64
 * @params {img} img标签
 * */
function image2Base64(img: HTMLImageElement) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx: any = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}

export default index;