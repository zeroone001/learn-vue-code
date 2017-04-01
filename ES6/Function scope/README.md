## Function scope, block scope, constants
In this lesson, we will introduce the let keyword for the purpose of declaring block scoped variables. You will also learn about defining block scoped constants, and the dangers of scoping, such as the temporal dead zone. We will conclude the lesson with best practices.
### Var vs Let
Variables declared with var have function scope. They are accessible inside the function they are defined in.
```javascript
var guessMe = 2;
// A: guessMe is 2
( function() {
    // B: guessMe is undefined
    var guessMe = 5;
    // C: guessMe is 5
} )();
// D: guessMe is 2

```

Comment B may surprise you if you have not heard of hoisting. JavaScript hoists all declarations. Hoisting is a transformation that transforms the code
### Array.from()
将类数组对象转化为数组
```javascript
const products = document.querySelectorAll('.leiming');
//products 就是所谓的类数组对象
```
### Promise
```javascript
var d = new Promise((resolve,reject) =>{
    throw new Error('error data');
        setTimeout(()=>{
            if(true){
                resolve('hello');
            }else{
                reject('error');
            }
        },2000);
        
    });
    d.then((data)=>{
        console.log('success:',data);
        return 'the second data';
        }).then((data)=>{
            console.log('second:',data);
            }).catch((error)=>{
                    console.log('error',error);
                });
   
```
### Generators
```javascript
function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield  {x:x,y:y};
        x += 2;
        y += 2;
    }
}

var m = graph();
console.log(m.next().value);
console.log(m.next('dasdasda').value);
console.log(m.next().value);
//Usage:
/*
    greater.next().value 这个取的是yield 右侧的值
    第二个greater.next('abc').value 的时候，'abc'这个字符串传给了friend这个变量
    所以说，代码执行到yield右侧的时候就停止了
*/
function* great(){
    let friend = yield "now";
    console.log('friend',friend);
}
var greater = great();
console.log(greater.next().value);
console.log(greater.next('dasdasdas').value);

```

### Maps and WeakMaps with ES6
```javascript
var myMap = new Map();
//API
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo','qq');
myMap.set('foo2','qqq');

//Iterators 迭代器
/*
 keys()
 entries()
 values()
*/

for(var key of myMap.keys()){
    console.lgo(key);
}

for(var value of myMap.values()){
    console.log(value);
}

for(var [key,value] of myMap.entries){
    console.log(key + '=' +value);
}
```














