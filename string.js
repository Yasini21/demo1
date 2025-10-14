//String literals
let name="Yasini"
let age=20
console.log(`Im ${name} and my age is ${age}`);

//Memory management in function.Memory is managed in two ways heap stack
//1.it is stored in stack
//Objects are stored in heap
//In stack first the main function is called then the print, then square and mul is called.
    const mul=(a,b)=>{
return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s=square(n);
    console.log(s);
}
print(10);


//event loop First javascript is synchronous singgle threaded language first it executes microtask
//then the macrotask that is executed will be stored in the web Api after the function is over it will
//be moved to queue once the microtasks are being completely executed the maceotask will be printed 
//javascript is working as asynchronous so we use event loop

console.log('first');
Promise.resolve().then(console.log('From Promises'))
setTimeout(()=>{
    console.log('Inside Timeout');
},2000)
console.log('last')


