// pages/picture/picture.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgData: []
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
        wx.showLoading({
            title: '加载中',
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.request({
            url: 'https://api-m.mtime.cn/Movie/ImageAll.api',
            data: {
                movieId: options.id
            },
            method: 'GET',
            success: res => {
                // console.log(res.data.images)
                wx.hideLoading()
                this.setData({
                    imgData: res.data.images
                })
            },
            fail: function(res) {},
            complete: function(res) {},
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