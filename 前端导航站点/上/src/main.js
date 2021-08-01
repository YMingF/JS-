//监听点击事件
$('.addButton')
    .on('click',()=>{
        let url=window.prompt('请输入你要的网址')//在网页端弹出一个方框让你输入,并返回你输入的内容
        if(url.indexOf('http')!==0){//如果输入的内容里没http
           url='https://'+url
        }
        console.log(url)
        const $siteList=$('.siteList')
        const $lastLi=$siteList.find('li.last')//到li里找类为last的元素
        const $li=$(`
        <li>
          <a href="${url}">
            <div class="site">
              <div class="logo">${url[0]}</div>
              <div class="link">${url}</div>
            </div>
          </a>
        </li>
        `).insertBefore($lastLi)//将新元素插到lastLi前面
    })