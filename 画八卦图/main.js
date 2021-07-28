let html=document.querySelector('#html')
let style=document.querySelector('#style');
let string=`
/*
你好我是史塔克
接下来我会向你展示前端的奇迹
首先我会准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
body{
    color:red
}
/*
接下来看看如何将一个div变成一个八卦图
首先，将div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);/*加上黑色的阴影*/
    border:none;
    /*设置八卦图形居中*/
    left:50%;
    transform:translateX(-50%);
}
/*
八卦由一黑一白的阴阳组成

*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个混元*/

#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    
    transform:translateX(-50%);/*移动自身宽的50%*/
    background:#000;
    border-radius:50%;

    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}

#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);/*移动自身宽的50%*/
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    

}
`
let n=-1;
let string2='' //此变量用于存储我们要显示到界面上的是啥内容

let step=()=>{
setTimeout(function(){
    n=n+1
    if(n>=string.length){return}
    if(string[n]==='\n'){
        
        string2+='<br>'//如果是\n就替换成br,
    }
    else if(string[n]===' '){
        string2+='&nbsp;'//这是HTML里表示空格的方法,这里替换是因为HTML会自动将字符里的多个空格合并为一个
    }
    else{
        string2+=string[n] //不是回车就按照原来的字符拼接上去
    }
 
    html.innerHTML=string2//网页内容
    style.innerHTML=string.substring(0,n)//这里不用string2是因为之前替换的HTML标签在CSS里无法出现
    window.scrollTo(0,9999)//将滚动条位置定位到最下面,这样就能够一直显示最新的内容,不需要用户自己拖动滚动条
    html.scrollTo(0,9999)//设置在手机状态下,滚动到最下方
    step()

},0)
}
step()


