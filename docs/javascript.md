# Variables

## var Keyword
It can be updated and can be redeclared.
It supports global and function scope but not block scope.
```Js
GLOBAL SCOPE
var course = "zero to hero";
console.log(window.course);//zero to hero

FUNCTION SCOPE
function abc(){
    var anotherCourse = "hero in lwc";
    console.log(anotherCourse);//hero in lwc
}
abc()
console.log(anotherCourse);//Uncaught ReferenceError: Since it supports function scope hence it is not printing anotherCourse outside loop.

BLOCK SCOPE
if(2===2){
    var x = 10;
}
console.log(window.x);//10 Since it do not support bock scope hence printing x outside loop.
```
## let Keyword
It can be updated and cannot be redeclared. 
It supports block and function scope but not global scope.
```Js
GLOBAL SCOPE
let course = "zero to hero";
console.log(course);//zero to hero
console.log(window.course);//undefined because it does not support global scope.

FUNCTION SCOPE
function abc(){
    let anotherCourse = "hero in lwc";
    console.log(anotherCourse);//hero in lwc
}
abc()
console.log(anotherCourse);//Uncaught ReferenceError: Since it supports function scope hence it is not printing anotherCourse outside loop.

BLOCK SCOPE
if(2===2){
    let x = 10;
    console.log(x);//10
}
console.log(window.x);//undefined. Since it supports block scope hence it is not printing x outside loop.
```
## const Keyword
It can't be updated and cannot be redeclared.
It supports block and function scope but not global scope.
```Js
GLOBAL SCOPE
const course = "zero to hero";
console.log(course);//zero to hero
console.log(window.course);//undefined because it does not support global scope.

FUNCTION SCOPE
function abc(){
    const anotherCourse = "hero in lwc";
    console.log(anotherCourse);//hero in lwc
}
abc()
console.log(anotherCourse);//Uncaught ReferenceError: Since it supports function scope hence it is not printing anotherCourse outside loop.

BLOCK SCOPE
if(2===2){
    const x = 10;
    console.log(x);//10
}
console.log(window.x);//undefined. Since it supports block scope hence it is not printing x outside loop.
```
# Spread Operator
## Array
```Js
var arr = ["a", "b", "c"];
console.log(arr); ["a", "b", "c"]
```
## Object
```Js
var obj = {
    name:"salesforce",
    age:23
};
console.log(obj.age); //23
console.log(obj["name"]);//salesforce 
```
# Spread Operator Use Case
## 1. Expanding of String
```Js
let greeting = "Hello Everyone";
let charList = [...greeting];
console.log(charList); 
//['H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
```
## 2. Combining Array
```Js
let arr1 = ["amazon", "google"];
let arr2 = ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3); 
//['amazon', 'google', 'facebook', 'instagram']
```
## 3. Adding Values to an Array
```Js
let arr1 = ["a", "b", "c"];
let arr2 = ["nikhil",...arr1];
console.log(arr2);//['nikhil', 'a', 'b', 'c']
```
## 4. Combining Objects
```Js
//Right Object Property Overrides Left Object Property
let obj1 = {name:"Salesforce",age:23};
let obj2 = {name:"Mulesoft",age:13};
let obj3 = {...obj1, ...obj2};
console.log(obj3);//{name: 'Mulesoft', age: 13} 
obj2 = {name:"Mulesoft",age:13,tech:"Integration"};
let obj4 = {...obj1, ...obj2};
console.log(obj3);//{name: 'Mulesoft', age: 13, tech: 'Integration'}
```
## 5. Shallow Copy
```Js
var arr1 = ["x","y","z"];
var arr2 = [...arr1];
arr2.push("nikhil");
console.log(arr1);//['x', 'y', 'z']
console.log(arr2);//['x', 'y', 'z', 'nikhil']
```

## 6. Nested Copy (Spread Operator Fails)
```Js
var arrObj = [
    {name:"nikhil"},
    {name:"salesforce"}
];
var newArrObj = [...arrObj];
newArrObj[0].name = "superman";
console.log(arrObj);//{name:"superman"},{name:"salesforce"}
console.log(newArrObj);//{name:"superman"},{name:"salesforce"}
```
### Hack for Nested Copy
```Js
var arrObj = [
    {name:"nikhil"},
    {name:"salesforce"}
];
var newArrObj = JSON.parse(JSON.stringify(arrObj));
newArrObj[0].name = "superman";
console.log(arrObj);//{name:"nikhil"},{name:"salesforce"}
console.log(newArrObj);//{name:"superman"},{name:"salesforce"}
``` 
# Destructuring
Destructuring is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables, as sometimes that's more convenient.
```Js
let arr = ["amazon","google"];
let [company1, company2] = arr;
console.log(company1);//amazon
console.log(company2);//google

let options = {
    title:"zero to hero",
    age:23,
    type:"CRM"
}
let {title, age, type} = options;//tis values should be same as key = options;
console.log(title);//zero to hero
console.log(age);//23
console.log(type);//CRM
```
# String Interpolation
```Js
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a+b}`);
//The sum of 10 and 20 is 30
```
# Object/JSON
```Js
let obj = {
    name:"Salesforce",
    age:25
};
console.log(Object.keys(obj));//['name', 'age']
console.log(Object.values(obj));//['Salesforce', 25]

CONVERT TO STRING
console.log(JSON.stringify(obj));//{"name":"Salesforce","age":25}
CONVERT STRING TO OBJECT
console.log(JSON.parse(JSON.stringify(obj)));//{name: 'Salesforce', age: 25}
```
# Promise
A promise is used to handle asynchronous operation. A promise has three state. 
1. Pending()
2. fulfilled()
3. rejected()

Use Case
1. Fetching data from server
2. Loading file from server
```Js
function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data==="success"){
            return resolve("Successfully Executed");
        }else{
            return reject("Unsuccessfully Executed");
        }
    })
}

//RESOLVE CONDITION
checkIsSuccess('success').then(function(result){
    console.log(result);
}).catch(function(error){
    console.error(error);
})

//REJECT CONDITION
checkIsSuccess('').then(function(result){
    console.log(result);
}).catch(function(error){
    console.error(error);
})

fetch('https://api.github.com/users/karkranikhil').then(function(result){
    return result.json();
}).then(function(response){
    console.log(response);
})
```
# Import & Export
```Js
//NORMAL EXPORT
export const PI = 3.14;
export function add(a,b){
    console.log(a+b);
}

//EXPORT TOGETHER
export {PI, add}
import {PI, add} from './util.js'

//EXPORT WITH ALIAS
export {PI as PI_DATA, add}
import {PI_DATA, add} from './util.js'

//EXPORT DEFAULT(There can only be one default method)
export default function minus(a,b){
    console.log(a-b);
}
import minus from './util.js'

//IMPORT ALL
import * as UTILS from './util.js'
```
# Events
ADD EVENT LISTNER
```HTML
<body>
    <button>Click</button>
</body>
```
```Js
function firstFunction(){
    console.log("Hurray");
}
let btn = documment.querySelector("button");
btn.addEventListner("click", firstFunction());
```

REMOVE EVENT LISTNER
```HTML
<body>
    <button onclick="removeHandler()"></button>
    <div class="demo"></div>
</body>
```
```Js
document.addEventListner("mousemove",handler)
function handler(){
    document.querySelector(".demo".innerHTML = Math.random())
}
function removeHandler(){
    document.removeEventListner
}
```
# Arrow Function

```Js
function sum(a,b){
    return a+b;
}
//CONVERTING TO ARROW FUNCTION
const sum =(a,b)=>a+b //i)No need to write retur ii)No need for bracket if there is only 1 parameter e.g. const sum =a=>a
```
```Js
let obj={
    name1:"nikhil",
    getName:function(){
        console.log(this.name1);//nikhil
        function fullName(){
            console.log(this.name1);//undefined
        }
        fullName();
    }
}
obj.getName();

//PROBLEM SOLVED BY ARROW FUNCTION (It does not loose refrence in inner function)
let obj={
    name1:"nikhil",
    getName:function(){
        console.log(this.name1);//nikhil
        const fullName =()=>console.log(this.name1);//nikhil
        fullName();
    }
}
obj.getName();
```
