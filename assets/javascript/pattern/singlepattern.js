// 保證一個類別只有一個實例，並提供global save
// single pattern
var useSingleton = (()=>
{
    var instance 
    function createInstance()
    {
        var obj = objectCreate()
        return obj
    }
    return ()=>
        {
            if(!instance) instance = createInstance()
            return instance 
        }
    
})()

