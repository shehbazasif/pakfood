let a="DAVID";
let b="aLI";
// console.log(a+b) //cannot contain spaces
// console.log(`${a} --- ${b}`); // string literals


//object referencing
const student={
    name:"sai",
    age:20,
};

const student2=student;
student2.name="Ammar"
// console.log(student)




//variable reference 
let name="Shehhbaz"
let name2=name;
name2="Ammar";
// console.log(name);
let name11="shehbaz"



//functions
function person(){
    let name11="Ammar";
    let name22="Shanza"
    let num1=12
    let num2=17
    return name11 + '       ' + name22 //return Multiple strings at once 
}
const funName = person()
// console.log(funName)

// spread operator

const teacher1={
    name:"Shehbaz",
    age:21,
    subject:person(),
    teachingTo:{...student, name21 : "123"},   //spread operator {...student}
}
 console.log(teacher1)



// object can access anything
const teacher={
    name:"Shehbaz",
    age:21,
    subject:person(),
    teachingTo:{student, name21 : "123"},
}
 console.log(teacher)

const arr01=[1,2,3,4,5]
console.log(...arr01) // spread operator can fetch each value of arry & object



function ammar(){
    let value="shhhahhhahaha"
    let value2="bbbbbbbb"
    return {value, value2} //these brackets are sign of object
}
const ammarName=ammar()
console.log(ammarName)


