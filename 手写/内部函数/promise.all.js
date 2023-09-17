// 如何使用 async/await 实现 Promise.all 的效果

function myPromise(promises) {
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            throw new TypeError("argument must be array")
        }
        let len = promises.length
        let finalCount = 0
        const result = []
        for(let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(value=>{
                finalCount++
                result[i] = value
                if(finalCount === len){
                   return resolve(result)
                }
            }).catch(e=>{
                return reject(e)
            })
        }
    })
}