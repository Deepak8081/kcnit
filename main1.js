// // a=2
// // b=3

// // console.log(`the sum of ${a} and ${b} is ${a+b}`)

// // const add = (x, y) => x + y;
// // console.log(add(500, 200));


// const multiply = (x, y) => {
//     let result = x * y;
//     return result;
//     };

// console.log(multiply(2,3))

// // let arr=[1,2,3,4,5];
// // console.log(arr)

// // let arr=()

// let [fName,lName]=["john","doe"]
// console.log(fName)
// console.log(lName)


// let isValid=true;
// let emptyValue=null
// let uniqueId=Sybmol('id')

let user={
    name:"joy",
    roll_nm:24,
    age:20,
}
   console.log(user.name)
   console.log(user.roll_nm)
   console.log(user.age)
let {name,age}=user;
console.log(name,age)


let newStr='123'
let num=Number(newStr)
console.log(num)
 let str=String(num)
 console.log(typeof(str))


let exp=10**2+(2+5)/(1+1)
console.log(exp)

let arr = ['kcnit', 'deepak', 'ravi'];
console.log(arr);

arr.push("akash");
console.log(arr);


let upCase = arr.map((arrs, i) => {
    return [arrs.toUpperCase(), i]; //to convert upper case
});
console.log(upCase);


arr=arr.slice(1,2) //0,n-1
console.log(arr)


let arrs = ['kcnit', 'deepak', 'ravi'];
arrs.unshift("raj")
console.log(arrs)

let arrs1 = ['kcnit', 'deepak', 'ravi'];
arrs1.shift()
console.log(arrs1)

let arrs2 = [10,20,30,50];
total=arrs2.reduce((el,ac)=>{
    return el+ac
})
console.log(total)

let arrs3 = [10,20,30,50,60];
filt=arrs3.filter((el)=>{
   return el>=30
})
console.log(filt)

const person=[
    {name:"bob",age:15},
    {name:"joy",age:35},
    {name:"alice",age:25},
    {name:"doe",age:17}
];
const adult=person.filter(el=> el.age>=18)
console.log(adult)

 const mult=[2,4,6,8,12]
 const mul=mult.map(el=>el*2)
 console.log(mul)

 const persons=[
    {name:"baroda",age:15},
    {name:"joy",age:35},
    {name:"alice",age:25},
    {name:"doe",age:17}
];
const digit3=persons.filter(el=> el.name.length>=4)
console.log(digit3)

// function Person3(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// Creating a new object using the constructor
// const person1 = new Person3('John', 'Doe', 30);
// console.log(person1.firstName); // Output: John

 const arrNew=[1,3,5,7,8]
 console.log(arrNew.slice(1,3))
 console.log(arrNew.splice(2,1,20))

 const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number * 2));



let matrix=[
    [1,2],
    [4,3],
    [7,8]
]
for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){    
        console.log(matrix[i][j])
    }
}

const newArr=['doe','john']
const newResult=newArr.reduce((ac,el)=>{
    return ac+el
})
console.log(newResult)


function calculator(op,a,b){

    switch(op){
        case 'add':
            console.log(a+b);
            break;
        case 'sub':
            console.log(a-b)
            break;
        case'mul':
            console.log(a*b);
            break;
        case 'div':
            console.log(a/b);
        default:
            console.log("Please enter a valid operator")
        }
}
calculator('mul',20,10)


function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  
  const triple = createMultiplier(3);
  console.log(triple(5)); // Output: 15
  
// git init - initializing a new repo
// git status //check status
// git add . - adds all changes in the current dir.
// git commit -m "message"
// git branch -M main
// git remote add origin url
// git push -u origin main 
