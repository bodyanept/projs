// КОНТЕКСТ ВЫЗОВА Ф-ЦИИ THIS

// let str='Aboba biba'
// const reversStr= str
// .split('')
// .reverse()
// .join('')
// // console.log(reversStr);

// function getPrice() {
//     console.log(this.price);
//     return this             //это для цепочного вызова
// }

// function getPrice(currency='$') {
//     console.log(currency+this.price);
//     return this             
// }

// function getName() {
//     console.log(this.name);
//     return this

// }

// const prod={
//     name:'Kasper',
//     price:600,
//     getPrice:function getPrice() {
//         console.log(this.price);
//     },
//     getName:function getName() {
//         console.log(this.name);
//     },
// }
// prod.getName()
// prod.getPrice()

// const prod2={
//     name:'mic',
//     price:200,
//     getPrice:getPrice,
//     getName:getName,
//     info:{
//         information:['only in shop'],
//         getInfo:function(){
//             console.log(this);
            
//         }
//     }
// }
// prod2.getName()
// prod2.getPrice()
// prod2.info.getInfo()
// const prod3={
//     name:'Kuchacha',
//     price:100,
//     getPrice,
//     getName,
// }

// prod3
// .getName()
// .getPrice() 


// const prod4={
//     name:'kom',
//     price:300,
//     getPrice
// }

// getPrice.call(prod4,'*')
// getPrice.apply(prod4,['*'])
// getName.call(prod4)
// const getPriseBind=prod4.getPrice.bind(prod4,'*')
// console.log(getPriseBind);

// setTimeout(getPriseBind,1000)


//СТРЕЛОЧНЫЕ Ф-ЦИИ

// const plus= (x,y)=>x+y;
// const plusRes=plus(3,2)
// console.log(plusRes);

// console.log(plus(3,2));

// function plusFoo(x,y) {
//     return x+y
// }
 
// const withoutArgs=()=>console.log('hello');
// withoutArgs()
// const singlArgs=x=>x*2
// console.log( singlArgs(4));
// const singlArgs=(x=8)=>x*2
// console.log( singlArgs());
// const moreActions=(a,b)=>{
//     a*=2;
//     b*=3
//     return a+b
// }
// console.log(moreActions(2,2));

// const returnObj =(str='')=>{
//     return{
//         value:str,
//         length:str.length
//     }
// }
// const returnObj =(str='')=>({
//         value:str,
//         length:str.length
//     })

// console.log(returnObj('chinathes'));

// function plusFoo(x,y) {
//     console.log(arguments);
//     return x+y
// }
// console.log(plusFoo(3,2));

// const obj={
//     firstName:'Bodya',
//     age:21,
//     getFirstName(){
//         console.log(this);  
//     },
//     // getAge:()=>console.log(this),
//     getAgeArrow:null,
//     getAge(){
//         // this.getAgeArrow=()=>console.log(this);
//         setTimeout(()=>console.log(this)
//         );
        
//     }
    
// }
// obj.getAge()
// obj.getAgeArrow()

//РЕКУРСИЯ

function pow(a,b) {
    console.log('a',a);
    
    if(b===0){
        return 1
    }else{
        const res = a*pow(a,b-1)
        console.log('b',b);
        return res

    }
}
console.log(pow(2,8));
