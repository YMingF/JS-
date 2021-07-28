window.jQuery=function(selector){
    const elements=document.querySelectorAll(selector)
    console.log(elements)
    //api用来操作elements
    return {
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className) //加class
            }
            return this //返回this目的是为了方便main.js里的链式操作
        }
    }
    
}