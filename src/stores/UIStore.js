import { observable, action } from 'mobx';

/**
 * 保存token等信息和其他UI相关，但是与业务无关的状态。
 */
class UIStore {
  //例子可删除
  @observable token = this.persistData.get('token', this);
  //例子可删除
  @observable isShowLoading = false;

  constructor(rootStore, persistData) {
    this.rootStore = rootStore;
    this.persistData = persistData;
  }

  @action
  setToken(token) {
    this.token = token;
  }
}
export default UIStore;
