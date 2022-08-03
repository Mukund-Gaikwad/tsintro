var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
var add = function () {
    var n1 = +num1.value;
    var n2 = +num2.value;
    cl(n1 + n2);
};
btn.addEventListener('click', add);
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
var fname = "jhon";
cl(fname, typeof fname);
//  fname = 1234;  //fname shows error, here we can't assign number to data type string
var x = 10;
cl(x, typeof x);
// x = 'ten';  // if we declare variable & assign its value as number then we can only reassign number not string,boolean
x = 20;
// x = true;
cl(x);
var a;
a = 30;
cl(a);
// a = true 
var Newage = 33;
cl(Newage);
// Newage = "thirty three"  //error here, string is not assign to number
var canDrive;
canDrive = true;
cl(canDrive);
// ................................... any data type .........................................
var y; // by default data type is any
//here we declare variable but not assign its value so, we can give any type of value i.e string,number,boolean
y = 2;
y = "two";
y = false;
var age;
age = 25;
cl(age); //25
var age1;
age1 = 35;
age1 = "thirty five";
// :::::::::::::::::::::::::::::::::::::::::::::: object ::::::::::::::::::::::::::::::::;
// In typescript when we create an object and we reassigning it then it should having the same keys 
var person;
person = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 20
};
cl(person);
// ...................................... Example object....................
var myprofile = {
    fname: "Mukund",
    age: 28
};
myprofile = {
    fname: "miki",
    age: 29
};
cl(myprofile);
// myprofile = {
//     fname : 'jhon',
//     lname : 'gaikwad'     // error keys are not same
// }
//..................................example object........................................
var product;
product = {
    ProductName: "Nokia",
    ProductCat: "Electronic",
    ProductPrice: 5599,
    ProductExp: new Date(2023, 0)
};
cl(product);
//..................................Example nested object......................................
var person2;
person2 = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 20,
    child: {
        fname: "om",
        lname: "pawar",
        age: 15
    }
};
cl(person2);
//...................................Example array in object.....................................
var person3;
person3 = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 20,
    keyskills: ['html', 'css3', 'angular'],
    child: {
        fname: "om",
        lname: "pawar",
        age: 15
    }
};
cl(person2);
// ::::::::::::::::::::::::::::::::::::::::::::::::: Array :::::::::::::::::::::::::::::::::::::::::::
var skills; // Array of string
skills = ['HTML', 'CSS3', 'JAVASCRIPT', 'TYPESCRIPT', 'ANGULAR'];
cl(skills);
var str = ['Node js', 'Mongodb', 'python'];
cl(str);
var array; // Array of number
array = [10, 20, 30, 40, 50];
cl(array);
var anyArray; // here data type of array declare any
anyArray = ['Mukund', 28, 'Abhi', true];
cl(anyArray);
// ::::::::::::::::::::::::::::::::::::::::::::::::: function :::::::::::::::::::::::::::::::
// In typescript function is written same way like in javascript 
//But we have to assign type of data for parameter / arguments.
function add2Num(num1, num2) {
    return num1 + num2;
}
cl(add2Num(10, 20));
// cl(add1(10,"twenty"));  // error here, we want only number data type
function multiply(m1, m2) {
    return m1 * m2;
}
cl(multiply(10, 10));
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
function addition(n1, n2, showResult, phrase) {
    if (showResult === true) {
        var result = n1 + n2;
        cl("".concat(phrase, " ").concat(result)); // cl(phrase + n1+n2)i.e. coersion heppen so, declare variable for addition
        // return;
    }
    else {
        return n1 + n2;
    }
}
addition(20, 20, true, 'The result is'); // show some msg in console
var getAddition = addition(20, 30, false, 'The result is');
cl(getAddition);
