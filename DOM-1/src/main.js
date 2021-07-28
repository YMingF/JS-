const div=dom.create('<div> 新增节点</div>')
console.log(div)
//创建新节点
const div3=dom.create('<div id="parent"></div>')
//创建父元素
dom.wrap(test,div3)
//清空子节点
const array =dom.empty(window.empty)
console.log(array)
//写属性
dom.attr(test,'title','牛皮啊老哥')
//读属性
console.log(`title:`+dom.attr(test,'title'))//获取title属性的值
//修改标签内文本的值
dom.text(test,'你他娘的还真是个人才~~')
//获取文本值
let txt=dom.text(test)
console.log(`标签里的text是:${txt}`)
//设置HTML的值
dom.html(test,'<div>神兵天降</div>')
//获取HTML的值
let ht=dom.html(test)
console.log(`标签里的html是:${ht}`)

//加style属性
dom.style(test,{border:'1px solid red',color:'green'})
//换种写法加入style属性
dom.style(test,'background','darkRed')

//读标签里面指定的style属性
console.log(dom.style(test,'background'))

//给标签添加class
dom.class.add(test,'red')//给标签test添加一个class：red
//删除class
dom.class.remove(test,'red')
//检查是否拥有某个class
console.log(dom.class.has(test,'blue'))

//添加事件
const fn=()=>{ 
    console.log('点击了')
}
dom.on(test,'click',fn)//注意你设置的事件得是人家有的,不能随便写个什么cc,人家识别不出来，亲测

//删除事件
dom.off(test,'click',fn)

//获取标签
const testDiv=dom.find('#test')[0]//从数组中提取
console.log(`找到的节点：`)
console.log(testDiv)
const testDiv2=dom.find('#test2')[0]
console.log(dom.find('.red',testDiv2)[0])//限定我要从testDiv2里面获取red

//找节点的父节点
console.log(dom.parent(test))

//查找兄弟节点
let s2=dom.find('#s2',siblings)[0]
console.log('查找到的内容是：')
console.log(dom.find('#travel')[0])
//查找弟弟
console.log('弟弟是：')
console.log(dom.next(s2))
//查找哥哥
console.log('哥哥是：')
console.log(dom.previous(s2))

//遍历查找
const t=dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))//遍历t的子元素设置style

//查看节点排名第几
console.log('此节点的排名是:')

console.log(dom.index(test))