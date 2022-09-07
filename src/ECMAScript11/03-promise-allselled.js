const promise1 = new Promise((reject )=>{
    reject('Reject')
});

const promise2 = new Promise((resolve)=>{
    resolve('Resolve')
});
const Promise3 = new Promise((resolve)=>{
    resolve('Resolve 2')
});

Promise.allSettled([promise1,promise2,Promise3])
    .then(res => console.log(res))
    