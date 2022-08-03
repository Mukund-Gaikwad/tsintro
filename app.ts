let cl = console.log;

let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = document.getElementById('num2')! as HTMLInputElement;
let btn = document.getElementById('btn')!;

const add = ()=>{
    let n1 = +num1.value; 
    let n2 = +num2.value; 
    cl(n1 + n2);
}

btn.addEventListener('click',add)

// const add = (n1:number, n2:number) =>{
//     return n1 + n2
// }

// btn.addEventListener('click', () =>{
//     cl(add(+num1.value, +num2.value))
// })


// null.value
//'value' does not exist on type 'HTMLElement'
//p >> innerHTML, innerText,Textcontent
//input,textarea>> value

// ::::::::::::::::::::::::::::::::::::::::::: Type :::::::::::::::::::::::::::::::::::::::::

let fname = "jhon";
cl(fname,typeof fname);
//  fname = 1234;  //fname shows error, here we can't assign number to data type string
 

let x = 10; 
cl(x,typeof x);

// x = 'ten';  // if we declare variable & assign its value as number then we can only reassign number not string,boolean

x = 20;
// x = true;
cl(x);

let a :number;
a = 30;
cl(a);
// a = true 

let Newage :number = 33;
cl(Newage);
// Newage = "thirty three"  //error here, string is not assign to number

let canDrive : boolean;
canDrive = true;
cl(canDrive);

// ................................... any data type .........................................

let y ;  // by default data type is any
        //here we declare variable but not assign its value so, we can give any type of value i.e string,number,boolean
y = 2;
y = "two";
y = false;

let age;   
age = 25;
cl(age);    //25

let age1 : any;
age1 = 35;
age1 = "thirty five"


// :::::::::::::::::::::::::::::::::::::::::::::: object ::::::::::::::::::::::::::::::::;

// In typescript when we create an object and we reassigning it then it should having the same keys 

let person : {
    fname : string,
    lname : string,
    age : number,
  
}
person = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 20,
   
}
cl(person);

// ...................................... Example object....................

let myprofile = {
    fname : "Mukund",
    age : 28,
}

myprofile = {
    fname : "miki",
    age : 29,            // here no any error because keys assign are same
}
cl(myprofile);

// myprofile = {
//     fname : 'jhon',
//     lname : 'gaikwad'     // error keys are not same

// }

//..................................example object........................................

let product : {
    ProductName : string,
    ProductCat : string,
    ProductPrice : number,
    ProductExp : Date,
}

product = {
    ProductName : "Nokia",
    ProductCat : "Electronic",
    ProductPrice : 5599,
    ProductExp : new Date(2023,0),
}
cl(product);
//..................................Example nested object......................................
let person2 : {
    fname : string,
    lname : string,
    age : number,
    child :{
        fname : string,
        lname : string,
        age : number,
    }
}
person2 = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 20, 
    child :{
        fname : "om",
        lname : "pawar",
        age : 15
    }
}
cl(person2);

//...................................Example array in object.....................................
let person3 : {
    fname : string,
    lname : string,
    age : number,
    keyskills : string[], 
    child :{
        fname : string,
        lname : string,
        age : number,
    }
}
person3 = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 20,
    keyskills : ['html', 'css3','angular'], 
    child :{
        fname : "om",
        lname : "pawar",
        age : 15
    }
}
cl(person2);

// ::::::::::::::::::::::::::::::::::::::::::::::::: Array :::::::::::::::::::::::::::::::::::::::::::

let skills : string[];  // Array of string
skills = ['HTML', 'CSS3','JAVASCRIPT','TYPESCRIPT', 'ANGULAR'];
cl(skills);

let str : string[] = ['Node js','Mongodb','python'];
cl(str);

let array :number[];  // Array of number
array = [10,20,30,40,50];
cl(array);

let anyArray : any[];           // here data type of array declare any
anyArray = ['Mukund', 28,'Abhi', true ];
cl(anyArray);


// ::::::::::::::::::::::::::::::::::::::::::::::::: function :::::::::::::::::::::::::::::::

// In typescript function is written same way like in javascript 
//But we have to assign type of data for parameter / arguments.

function add2Num(num1:number, num2:number){
    return num1 + num2;
}
cl(add2Num(10,20));
// cl(add1(10,"twenty"));  // error here, we want only number data type

function multiply(m1:number, m2:number){
    return m1 * m2;
}
cl(multiply(10,10));


// function addition(n1:number, n2:number, showResult:boolean){
//     if(showResult === true){
//         cl(n1 + n2);
//         // return;
//     }else{
//         return n1 + n2;
//     }
// }
// addition(20,20,true)   // if showResule value is true then print in console and if false return function

// let getAddition = addition(20,30,false);  
// cl(getAddition);   


function addition(n1:number, n2:number, showResult:boolean, phrase:string){
    if(showResult === true){
        let result = n1 + n2;
        cl(`${phrase} ${result}`);   // cl(phrase + n1+n2)i.e. coersion heppen so, declare variable for addition
        // return;
    }else{
        return n1 + n2;
    }
}
addition(20,20,true,'The result is')   // show some msg in console

let getAddition = addition(20,30,false,'The result is');  
cl(getAddition); 