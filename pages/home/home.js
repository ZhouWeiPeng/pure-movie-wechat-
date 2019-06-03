// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabIndex: 0,
        movieListSP: [],
        movieListRY: [],
        movieListSY: []
    },

    changeTab(e) {
        // this.setData({
        //     tabIndex: e.detail.index
        // })
        this.setData({
            tabIndex: e.currentTarget.dataset.index
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            // 正在售票
            url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api',
            data: {
                locationId: 365
            },
            method: 'GET',
            success: res => {
                this.setData({
                    movieListSP: res.data.movies
                })
            },
            fail: function(res) {},
            complete: function(res) {},
        })
        wx.request({
            // 正在热映
            url: 'https://api-m.mtime.cn/Showtime/LocationMovies.api',
            data: {
                locationId: 365
            },
            method: 'GET',
            success: res => {
                this.setData({
                    movieListRY: res.data.ms
                })
            },
            fail: function (res) { },
            complete: function (res) { },
        })
        wx.request({
            // 即将上映
            url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api',
            data: {
                locationId: 365
            },
            method: 'GET',
            success: res => {
                this.setData({
                    movieListSY: res.data.moviecomings
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