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
let greeting = "Hello Everyone";
let charList = [...greeting];
console.log(charList); //['H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

## 2. Combining Array
let arr1 = ["amazon", "google"];
let arr2 = ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3); 
//['amazon', 'google', 'facebook', 'instagram']