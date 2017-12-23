// 定義一系列算法，依序封裝，並且使它們可以相互替換

var clientManage = (()=>{
     return { 
        "name":(name,element="")=>{return clientName(name,element)},
        "value":(value,element="")=>{return clientValue(value,element)}
     }
})()

var clientName = (name,element="")=>
{
    return element==="" ?objectCreate(element="div",html=name):objectCreate(element=element,html=name)
}
var clientValue = (value,element="")=>
{
    return element==="" ?objectCreate(element="span",html=value): objectCreate(element=element,html = name)
}

var useStrategy = ()=>
{
    // can input value
    var run = clientManage.name("Test1")
    run = clientManage.value("sa")
    run = clientManage.name("我是按鈕!","button")
    return run   
}