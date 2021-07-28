window.jQuery=function(selectorOrArray){
    let elements
    if(typeof selectorOrArray==='string'){
        elements=document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){//如果是数组类型
         elements=selectorOrArray //直接将数组赋值给elements
    }
    //api用来操作elements
    return {
        
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className) //加class
            }
            return this //返回this目的是为了方便main.js里的链式操作
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent(){
            const array=[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){//面对不存在的数据indexOf会返回-1
                    array.push( node.parentNode)//parentNode是节点固有的属性
                }
            })
            return jQuery(array)
        },
        children(){
             const array=[]
             this.each((node)=>{
                array.push(...node.children)//...是展开操作符,就是将数组node.children里的东西一个个取出来,逐个添加到前面的array里面去，就比如不加的时候就是[[1,2,3]]，而加了之后就是[1,2,3]
             })
             return jQuery(array)
        },
        print(){ //实现一个自动输出数据的函数
            console.log(elements)
        },
        find(selector){
            let array=[]
            for(let i=0;i<elements.length;i++){
                const elements2=Array.from(elements[i].querySelectorAll(selector))
               array=array.concat(elements2)
            }
            array.oldApi=this// this就是调用find函数的对象,也就说这个对象是我们find找到的array的爸爸
            const newApi=jQuery(array) //传入数组,目的是返回一个新对象，方便在find找到新标签后,能够执行addClass的操作
            return newApi 
        },
        oldApi:selectorOrArray.oldApi,
        end(){
            return this.oldApi//返回上方存储的oldApi
        }
    }
    
}

