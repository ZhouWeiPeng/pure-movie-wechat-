// pages/actors/actors.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        actorsData: {},
        activeName: '-1'
    },

    onChange(event) {
        this.setData({
            activeName: event.detail
        });
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
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
        wx.request({
            url: 'https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api',
            data: {
                movieId: options.id
            },
            method: 'GET',
            success: res => {
                wx.hideLoading()
                this.setData({
                    actorsData: res.data.types
                })
            },
            fail: function (res) { },
            complete: function (res) { },
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