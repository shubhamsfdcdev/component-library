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
## Hack for Nested Copy
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