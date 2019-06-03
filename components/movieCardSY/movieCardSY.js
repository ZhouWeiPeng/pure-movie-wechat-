// components/movieCard/movieCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        movieList: Array
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        getDetail(e) {
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id + '&title=' + e.currentTarget.dataset.title + '&count=' + e.currentTarget.dataset.count,
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
            })
        },
    }
})