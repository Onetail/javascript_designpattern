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

    document.getElementById("single").onclick = (()=>
    {
        moduleSwitch(type="single")
    })
})()

function objectCreate()
{
    var content =  document.createElement("div")
    content.id="test"
    content.style.position = "absolute"
    // if(document.getElementById("test"))
    // {
        content.innerHTML="123"
    // }
    document.body.appendChild(content)
    
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
        default:
            return false
    }
    console.log(runStatement)
}