
function change(obj , strArr = []){
    if(!(obj instanceof Object))return obj
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object){
                change(obj[key], strArr)
            }
        }
    }
}