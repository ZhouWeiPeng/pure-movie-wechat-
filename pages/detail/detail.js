// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailData: {},
        wantedCount: '',
        miniCom: [],
        plusCom: []
    },

    sorry(){
        wx.showToast({
            title: '没api挺难受的',
            image: '/img/ku.png',
            duration: 2000,
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: options.title,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.showLoading({
            title: '加载中',
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.request({
            url: 'https://ticket-api-m.mtime.cn/movie/detail.api',
            data: {
                locationId: 365,
                movieId: options.id
            },
            method: 'GET',
            success: res => {
                // wx.hideLoading()
                this.setData({
                    detailData: res.data.data
                })
            },
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.request({
            url: 'https://ticket-api-m.mtime.cn/movie/hotComment.api',
            data: {
                movieId: options.id
            },
            method: 'GET',
            success: res => {
                wx.hideLoading()
                this.setData({
                    miniCom: res.data.data.mini.list,
                    plusCom: res.data.data.plus.list
                })
            },
            fail: function(res) {},
            complete: function(res) {},
        })
        this.setData({
            wantedCount: options.count
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})