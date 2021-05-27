// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindViewTap() {
    var that=this;
    wx.getUserProfile({
      //获取用户授权信息
      desc:"test",
      success(res){
        // console.log("页面授权成功")
        var userInfos=res.userInfo;
        // that.setData({userInfo:userInfos});
        // app.initUserInfo(userInfos);
        // console.log(userInfos);
        // wx.login({
        //   success (res) {
        //     if (res.code) {
        //       //发起网络请求
        //       wx.request({
        //         url: 'http://127.0.0.1:8000/login/',
        //         method:'POST',
        //         header:{
        //           "content-type":"application/x-www-form-urlencoded"
        //         },
        //         data: {
        //           code: res.code,
        //           nickname:userInfos.nickName,
        //           gender:userInfos.gender,
        //           city:userInfos.city,
        //           province:userInfos.province,
        //           country:userInfos.country,
        //           avatarurl:userInfos.avatarUrl
        //         },
        //         success(res){
                wx.setStorageSync('avatarUrl',res.userInfo.avatarUrl);
                wx.setStorageSync('nickName',res.userInfo.nickName);
                console.log('登录授权成功函数')
        //         console.log(res,res.data.openid,res.data.iflogin)
        //         }
        //       })
        //     } else {
        //       console.log('登录失败！' + res.errMsg)
        //     }
        //   }
        // })
        wx.navigateBack({
          delta: 1
        })
      
      }
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