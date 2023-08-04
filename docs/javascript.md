# Variables

## var Keyword
It can be updated and can be redeclared.
It supports global and function scope but not block scope.
```
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
```
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
```
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
```
var arr = ["a", "b", "c"];
console.log(arr); ["a", "b", "c"]
```
## Object
```
var obj = {
    name:"salesforce",
    age:23
};
console.log(obj.age); //23
console.log(obj["name"]);//salesforce 
```
# Spread Operator Use Case
## 1. Expanding of String
```
let greeting = "Hello Everyone";
let charList = [...greeting];
console.log(charList); 
//['H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
```
## 2. Combining Array
```
let arr1 = ["amazon", "google"];
let arr2 = ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3); 
//['amazon', 'google', 'facebook', 'instagram']
```
## 3. Adding Values to an Array
```
let arr1 = ["a", "b", "c"];
let arr2 = ["nikhil",...arr1];
console.log(arr2);//['nikhil', 'a', 'b', 'c']
```
## 4. Combining Objects
```
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
```
var arr1 = ["x","y","z"];
var arr2 = [...arr1];
arr2.push("nikhil");
console.log(arr1);//['x', 'y', 'z']
console.log(arr2);//['x', 'y', 'z', 'nikhil']
```

## 6. Nested Copy (Spread Operator Fails)
```
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
```
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
```
let arr = ["amazon","google"];
let [company1, company2] = arr;
console.log(company1);//amazon
console.log(company2);//google

let options = {
    title:"zero to hero",
    age:23,
    type:"CRM"
}
let {title, age, type}//tis values should be same as key = options;
console.log(title);//zero to hero
console.log(age);//23
console.log(type);//CRM
```
# String Interpolation
```
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a+b}`);
//The sum of 10 and 20 is 30
```