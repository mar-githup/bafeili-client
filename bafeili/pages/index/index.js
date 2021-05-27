// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    item:0,
    tab:0,
    cate:0,
    movieList:[{
        create_time:'2020-9-9 20:20:20' ,title:'海边随拍',
        cover_img:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/image_collection/1593746028.jpg',
        src:"https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/video/1593741842.mp4"
      },{
        create_time:'2020-9-9 20:20:20' ,title:'勿忘心安',
        cover_img:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/image_collection/1593747890.jpg',
        src:"https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/video/1593747913.mp4"
      },{
        create_time:'2020-9-9 20:20:20' ,title:'点滴记忆',
        cover_img:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/image_collection/1593748425.jpg',
        src:"https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/video/1593748261.mp4"
      },{
        create_time:'2020-9-9 20:20:20' ,title:'点滴记忆',
        cover_img:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/image_collection/1593748843.jpg',
        src:"https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/video/1593752661.mp4"
      }
    ],
    allgoodList:[
      {
        imgUrl:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/goods_category/1592198234.jpg',
        catelist:['时髦单品','轻奢主义','顽皮猫系列','豌豆系列','闪光少女系列','美杜莎系列']
      },
      {
        imgUrl:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/goods_category/1592198247.jpg',
        catelist:['皮鞋','运动鞋']
      },
      {
        imgUrl:'https://diorleather.oss-cn-shenzhen.aliyuncs.com/upload/goods_category/1592198305.jpg',
        catelist:['太阳镜','耳环','手环']
      }
    ],
  videoContext:null,
  inputValue:'',
  },
  onReady:function(){
    this.videoContext=wx.createVideoContext('myVideo')
  },
  bindInputBlur:function(e){
    this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],
      camera: 'back',
      maxDuration:60,
      success:res => {
        src:res.tempFilePath
      }
    })
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
  },
  showCate:function(e){
    if (this.data.cate != e.currentTarget.dataset.cate) {
      this.setData({
        cate:e.currentTarget.dataset.cate
      })
    } else {
      this.setData({
        cate:0
      })
    }
  },
  onPullDownRefresh:function(){
    console.log('此时用户正在进行下拉触顶')
  },
  onReachBottom:function(){
    console.log('此时用户正在进行上拉触底')
  },
  onPageScroll:function(){
    console.log('此时用户正在滚动页面')
    console.log('滚动距离：'+this.options.scrollTop)
  }




})
