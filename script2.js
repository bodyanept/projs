// typeof
// let age = 30

// console.log(typeof age);


// let city = 'Ufa'

// console.log(typeof city);

// let status = false
// console.log(typeof status);
// console.log(typeof 'status');
// let data = null
// console.log(typeof data);

// let user 
// console.log(typeof user);

//Операторы

// let sum = 5 + 6
// console.log(sum);

// let sum2 ='Привет' + ' мир'
// console.log(sum2);
// let sum3 ='1' + '2'
// console.log(sum3);
// console.log(Number(sum3));
// console.log(sum + sum3);
// console.log(sum + Number(sum3));

// let err = 5
// console.log(-err / 0)           //-Infinity

// let a = 4
// console.log(a**2)           //В СТЕПЕНЬ
// console.log(Math.pow(a,2))  //В СТЕПЕНЬ

// a = ++a     //a = a + 1
// console.log(a)
// a = --a     //a = a - 1
// console.log(a)      //4
// console.log(a--)    //4, потом вычитается -1
// console.log(a)      //3
// console.log(++a)    //3+1=4
// console.log(a)      //4
// console.log(-a / 0)      //-Infinity


//prompt() alert()

//1task

// const name = prompt('привет,как тебя зовут?')
// alert('Привет ' + name)

//task 2
// const year = 2024
// let birthYear = prompt('В каком году ты родился?')
// let age = year - birthYear
// alert(age)

//task3
// let square = prompt('Какая длина стороны кватрата',)
// let p = 4 * square
// alert(p)


//task3
// const pi = 3.14
// let around = prompt('Какой радиус окружности?',)
// let s = 3.14 * Math.pow(around,2)
// alert(s)

//task4

// let km = prompt('Расстояние до Уфы в км?')
// let hr = prompt('За какое время хочешь добраться (в км)?')
// let kmh = km / hr
// alert(kmh + ' км\ч')

//task6

// let dollar = prompt('введи доллар получишь евро')
// let euro = dollar * 0.9
// alert(euro)

//task7
// let gb = prompt('сколько гб на флешке,столько влезет этих файлов')
// let mb = gb * 1024
// let sht = mb / 820
// alert(sht)

//task8

// let money = prompt('сколько у тебя деняк')
// let price = prompt('сколько стоит шоколадка')
// let kolvo = money / price
//let sdacha = 


//условия




// let work = true
// if(work){
//     console.log('Есть мани');
// }



let work = prompt('Укажи зп')
// if(work<20000){
//     console.log('вам отказ')
// }
// else if(work<30000){
//     console.log('нужен поручитель')

// }
// else if(work>40000){
//     console.log('ВАМ ОДОБРЕНО!!!')

// }
// work<=20000 ? console.log('вам отказ') : console.log('вам одобрено')         //тернарный оператор

switch (work) {
    case 20000:
        alert('вам отказ')
    case 30000:
        alert('нужен поручитель')
    case 40000:
        alert('ВАМ ОДОБРЕНО!!!')
        default:
            alert('дай все доки')
}




let statusUser = false
if(statusUser){
    Auth(on)
}
else if(dfhbdf){auth(off)}
else if(){auth(off)}
else if(){auth(off)}











