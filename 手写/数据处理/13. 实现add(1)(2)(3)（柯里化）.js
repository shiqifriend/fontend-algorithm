function add(...args){
    return args.reduce((a,b)=>a+b)
}

function Currying(fn){
    let args = []
    return function temp(...newArgs){
        if(newArgs.length){
            args = [...args,...newArgs]
            return temp
        }else{
            let val = fn.apply(this,args)
            args = []//保证再次调用时清空
            return val
        }
    }
}
let addCurry = Currying(add)
console.log(addCurry(1)(2)(3)(4,5)());

// 参数长度固定
var add2 = function (m){
    var temp = function (n){
        return add(m+n)
    }
    temp.toString = function(){
        return m
    }
    return temp
}