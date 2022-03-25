/**
 * 实现发布订阅
 */
export const MESSAGE_EVENT_NAME_MAPS = {
  WHICH_TEMPLATE: 'template001', // 简历模块选择
};

class Messager {
  send(event: string, payload: any){
    document.dispatchEvent(
      new CustomEvent(event, {
        detail: {
          payload: payload,
        },
      })
    );
  };
  receive(event: any, messageHandler: Function){
    if (messageHandler) {
      const payload = event?.detail?.payload;
      messageHandler(payload);
    }
  };
}

export default new Messager();