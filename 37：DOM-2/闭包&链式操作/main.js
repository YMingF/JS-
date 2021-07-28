const api=jQuery('.test') //调用时返回api对象
api.addClass('red')  //这个代码调用后会返回this，它就是api
    .addClass('blue') //链式操作遍历获取的元素,添加red和blue两个类属性