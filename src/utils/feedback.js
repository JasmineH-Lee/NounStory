/**
 * 提示与加载工具类
 */
export default class FeedBack {
  constructor() {
    this.isLoading = false
  }

  /**
   * 模态窗口
   */
  static confirm(obj = {}) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: obj.title || '提示',
        content: obj.content || '感谢您的使用',
        showCancel: obj.showCancel || true,
        confirmText: obj.confirmText || '确定',
        cancelText: obj.cancelText || '取消',
        confirmColor: obj.confirmColor || '#3CC51F',
        cancelColor: obj.cancelColor || '000000',
        success: res => {
          if (res.confirm) {
            resolve(obj.confirm())
          } else if (res.cancel) {
            resolve(obj.cancel())
          }
        },
        fail: res => {
          reject(res)
        }
      })
    })
  }

  static toast(obj = {}) {
    return new Promise((resolve) => {
      wx.showToast({
        title: obj.title,
        icon: obj.icon || 'none',
        mask: obj.mask || true,
        image: obj.src || '',
        duration: obj.duration || 1500,
        success: res => {
          resolve(obj.success())
        }
      })
      // 隐藏后的回调
      if (obj.onHide) {
        setTimeout(() => {
          obj.onHide()
        }, obj.duration)
      }
    })
  }

  /**
   * 警告框
   */
  static alert(title) {
    wx.showToast({
      title: title,
      mask: true,
      duration: 2000
    })
  }

  /**
   * 弹出加载提示
   */
  static loading(title = '加载中') {
    if (FeedBack.isLoading) {
      return
    }
    FeedBack.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (FeedBack.isLoading) {
      FeedBack.isLoading = false
      wx.hideLoading()
    }
  }

  /**
   * 失败框
   */
  static fail(title) {
    wx.showToast({
      title: title,
      image: '../images/new_detail/delete.png',
      mask: true,
      duration: 2000
    })
  }
}
/**
 * 静态变量，是否加载中
 */
FeedBack.isLoading = false
