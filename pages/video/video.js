// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        pageIndex: 1,
        videoData: []
    },

    getMoreVideo(){
        wx.showLoading({
            title: '加载中',
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
        wx.request({
            url: 'https://api-m.mtime.cn/Movie/Video.api',
            data: {
                pageIndex: this.data.pageIndex,
                movieId: this.data.id
            },
            method: 'GET',
            success: res => {
                wx.hideLoading()
                if (res.data.videoList.length == 0){
                    wx.showToast({
                        title: '没有更多了哟',
                        icon: '',
                        image: '/img/ku.png',
                        duration: 2000,
                        mask: true,
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                    })
                    return
                }
                this.setData({
                    videoData: this.data.videoData.concat(res.data.videoList),
                    pageIndex: ++this.data.pageIndex
                })
            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.title,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
        this.setData({
            id: options.id
        })
        this.getMoreVideo()
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