function throttle(fn, delay) {
    let curTime = Date.now()
    return function(...args) {
        let nowTime = Date.now()
        if(nowTime - curTime >= delay) {
            curTime = nowTime
           return fn.apply(this, args)
        }
    }
}