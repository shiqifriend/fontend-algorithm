async function timer(tim) {
    const data = await new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(tim);
      }, tim);
    });
    return console.log(data);
  }
  
  function orderPromise2(parr) {
    return parr.reduce((a, b) => {
      return a.then(() => b());
    }, Promise.resolve());
  }
  let arr = [
    () => timer(5000),
    () => timer(3500),
    () => timer(2000),
    () => timer(500),
  ];
  orderPromise2(arr);
  
  async function orderPromise(parr) {
    for (p of parr) {
      await p();
    }
  }
  orderPromise(arr);
