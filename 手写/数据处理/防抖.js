function debounce(fn, wait) {
    let timer= null
    return function(...args){
        const that = this
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        setTimeout(() => {
            fn.apply(that,args)
        }, wait);
    }
}