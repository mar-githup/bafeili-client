// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    item:0,
    tab:0,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeItem:function(e){
    this.setData({
      item:e.target.dataset.item
    })
  },
  changeTab:function(e){
    this.setData({
      tab:e.detail.current
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
