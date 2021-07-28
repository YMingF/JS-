window.dom={
    create(string){
        const container=document.createElement('template')//template标签就是一个万能容器,可以容纳任何标签
        container.innerHTML=string.trim()//tr
        return container.content.firstChild
    },
    after(node,node2){ //在node后面新增节点node2
        //因为只有insertBefore这种插入方法,所以用它来将node2插在node下一个节点的前面,可不就是node的后面么
        node.parentNode.insertBefore(node2,node.nextSibling)

    },
    before(node,node2){//在node前面添加节点node2
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){//新增一个儿子
        parent.appendChild(node)
    },
    wrap(node,parent){//给节点node加个爸爸parent
        dom.before(node,parent)//将parent添加到node的前面,这时parent就成了node兄弟元素
        dom.append(parent,node)//将node从原来的地方移开，添加到parent里面去,此时node就成了parent的子元素

    },
    remove(node){
        node.parentNode.removeChild(node)
        return node//返回一下,以防还有人需要引用这个节点。感觉就像Py的pop函数一样,返回删除结果
    },
    empty(node){//删除所有后代
        
        const array=[]
        let x=node.firstChild//获取到第一个子节点
        while(x){
            array.push(dom.remove(node.firstChild))//前面定义了remove()函数在运行后会返回被删除的节点,所以放到一个括号里
            x=node.firstChild//因为之前的头节点被删除了,所以本来的第二个节点就成了头结点

        }
        return array
    },
    attr(node,name,value){//读写属性
        if(arguments.length===3){//如果传入了三个属性,说明是想要修改属性值
        node.setAttribute(name,value)
    }else if(arguments.length===2){//如果只有两个属性,说明是想要获取属性值
       return node.getAttribute(name)
    }
    },
    text(node,string){
        if(arguments.length==2){//传两个元素，修改文本值
            //适配
            if('innerText' in node){//假如节点node有innerText这个属性
                node.innerText=string //ie浏览器
            }
            else{
                node.textContent=string   //其它浏览器
            }
        }else if(arguments.length==1){//只传一个元素,那就获取文本值
             //适配
             if('innerText' in node){//假如节点node有innerText这个属性
                return node.innerText //ie浏览器
            }
            else{
                return node.textContent   //其它浏览器
            }
        }
        
       
    },
    html(node,string){
        if(arguments.length===2){
            node.innerHTML=string 
        }
        else if(arguments.length===1){
            return node.innerHTML //返回你的HTML内容 
        }
    },
    style(node,name,value){
        if(arguments.length===3){//如果传入了3个参数,那可能调用时写成了dom.style(div,'border','1px solid red')
             node.style[name]=value

        }else if(arguments.length===2){
            if(typeof name==='string'){
                //两个参数,然后第二个是字符串那就可能是dom.style(div,'color')想获取标签的color元素
                return node.style[name]//返回属性的值
            }
            else if(name instanceof Object){//如果name是Object的实例
            //那就是这种写法dom.style(test,{border:'1px solid red',color:'green'})
                const object=name
                for(let key in object){//遍历取出对象name里面的key
                    node.style[key]=object[key]//不能写成node.style.key，否则key就成字符串了
                }

            }

       }
        
    },
    class:{//对象
        add(node,className){//添加
            node.classList.add(className)
        },
        remove(node,className){//删除
            node.classList.remove(className)
        },
        has(node,className){//检查是否有这样的className
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        //利用||返回第一个真值的特点,如果有scope,那就在scope里找选择器，否则就到document里面找
        return (scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        // Array.from()将伪数组变为真数组

       return Array.from(node.parentNode.children).filter(n=>n!==node)//不要包括节点node本身

        
    },
    //找兄弟节点中的弟弟
    next(node){
        let x=node.nextSibling
        while(x && x.nodeType===3){//如果x不为空并且这个节点类型是文本
            x=x.nextSibling

        }
        return x
    },
    previous(node){
        let x=node.previousSibling
        while(x && x.nodeType===3){//如果x不为空并且这个节点类型是文本
            x=x.previousSibling

        }
        return x
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
       const list= dom.children(node.parentNode)
       let i
       for(i=0;i<list.length;i++){
            if (list[i]===node){
                break
        }
    }
    return i
    }

}