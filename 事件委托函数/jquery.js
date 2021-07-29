setTimeout(()=>{
  const button=document.createElement('button')
  button.textContent='click me'
  div1.appendChild(button)
  
},1000)

function on(eventType,element,selector,fn){
  if(!(element instanceof Element)){ //element有可能是一个元素也可能只是一个选择器
    element=document.querySelector(element)//如果是选择器就得去根据它寻找对应的节点
  }
  element.addEventListener(eventType,(e)=>{
    const t=e.target
    if(t.matches(selector)){
      fn(e)
    }
  })
  }

on('click','#div1','button',(e)=>{
    console.log('button 被点击了，兄弟')
  })