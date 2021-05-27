// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:''
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var avatarUrl=wx.getStorageSync('avatarUrl');
    if(!avatarUrl){
      console.log("没有获取到userinfo")
      wx.navigateTo({
        url: '../login/login',
        success: function(res) {              
        },
        fail: function(res) {              
        },
        complete: function(res) {
        },
       })
    }else[
      console.log('nickname',wx.getStorageSync('nickName'))
    ]
  },
  bindViewTap() {
    var that=this;
    var avatarurl=wx.getStorageSync('avatarUrl');
    var nickname=wx.getStorageSync('nickName');
    console.log(avatarurl,nickname)
    var userInfo_1={
      avatarUrl:avatarurl,
      nickName:nickname
    }
    this.setData({
      userInfo:userInfo_1,
    })
    console.log(that.userInfo)
  },
  quit(){
    wx.removeStorageSync('avatarUrl');
    wx.removeStorageSync('nickName');
    wx.navigateTo({
      url: '../login/login',
      success: function(res) {              
      },
      fail: function(res) {              
      },
      complete: function(res) {
      },
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})