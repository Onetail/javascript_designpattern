(()=>
{
    var dropDown = (()=>
    {
        document.getElementById("dropdown").classList.toggle("show")
    })
    document.getElementById("pointme").onclick=()=>
    {
        dropDown()
    }
    document.getElementById("clear").onclick=()=>
    {
        clearTestcontent()
    }

    document.getElementById("single").onclick = (()=>
    {
        moduleSwitch(type="single")
    })
    document.getElementById("strategy").onclick= (()=>
    {
        moduleSwitch(type="strategy")
    })
})()

function objectCreate(element="div",html="obj")
{
    var content =  document.createElement(element)
    content.id="test"
    content.style.position = "relative"
    // if(document.getElementById("test"))
    // {
        content.innerHTML=html
    // }
    document.getElementById("testframe").appendChild(content)
    
    return content
    // moduleswitch(type=type,obj = content)
}
function moduleSwitch(type)
{
    var runStatement;
    switch(type)
    {
        case "single":
            runStatement = useSingleton()
            break;
        case "strategy":
            runStatement = useStrategy()
            break;
        default:
            return false
    }
    console.log(runStatement)
}
function clearTestcontent()
{
    $("#testframe").empty()
}