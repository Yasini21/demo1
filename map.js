//map function->will take all the element and check the result and display

function double(num){
    return num*2;

}
let arr=[2,3,4,5,6,7];
let doubledArr=arr.map(double);
console.log(doubledArr);
let tripledArr=arr.map((n)=>n*3);
console.log(tripledArr);

//filter function->used to filter and given only the number which is true
function isOdd(num){
    if(num%2!=0){
        return true;
    }
}
//let arr=[1,2,3,4,5,6]
let OddEvenn=arr.filter(isOdd);
console.log(OddEvenn);

let array=[13,15,20,35,27]
let multFive=array.filter((num)=>num%5===0);
console.log(multFive);


//reduce function->used to reduce into single value
let array1=[1,2,3,4,5,6];
let sum=array1.reduce((Product,current)=>{
    return Product*current;
},1)
console.log(sum);






//Example of using three
let array2=[1,2,3,4,5,6,7];
let mapp=array2.map((m)=>m*3);
console.log(mapp);

let filterr=mapp.filter((num1)=>num1%2==0);
console.log(filterr);

let reducec= filterr.reduce((sum,current)=>{
    return sum+current;
},0);
console.log(reducec); 



let a=[1,2,3,4,5];
let ans=a.map((n)=>n*3)
.filter((n)=>n%2==0)
.reduce((sum,cur)=>{
    return sum+cur;
},0)
console.log(ans);



//Destructing in js
// let b=[1,2,3,4,5]
// const[one,,two]=b;
// console.log(two);

//rest operator
let b=[1,2,3,4,5];
const[one,...two]=b;
console.log(two);

//spread operator->helps in merging
let spread=[0,...b,6,7]
console.log(spread);

//for object spread if two obj is created and with same variable it will take the second object value and console it bcz the first obj value will be overridden
const obj1={x:3,y:5}
const obj2={y:6,z:7}
const spreadans={...obj1,...obj2};
console.log(spreadans);



promises=>things in future 
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve('Resolved successfully')
        }else{
            reject('rejected');
        }
    },2000)//macrotask->its is a task that will be executed after all microtask gets completed even if the time is 0 sec not 2000
})
console.log('Before promise execution');
promise.then((result)=>console.log(result))//microtask is the task that will be executed first
.catch(err=>console.log(err))
.finally(()=>{console.log('Promises completed')})
console.log('After promise execution');





fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=>console.log(data))
.catch((err)=>console.log(err))


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=> data.map((user)=>{console.log(user.name)}))
.catch((err)=>console.log(err))



//async=>used for async await function,promises result will be returned
//await =>if your using asyn use await and when the promises is waiting use await

async function fetchApi(){
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json();
        data.map((user)=>{
            console.log(user.name)
        })
    }catch(error){
        console.log(error);
    }
}
fetchApi();

//String literals
let name="Yasini"
let age=20
console.log(`Im ${name} and my age is ${age}`);