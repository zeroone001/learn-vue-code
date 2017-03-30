## Arrow Function
我们先描述箭头函数语法，然后将会发现箭头函数最主要的优势-context binding(上下文绑定)

### Fat Arrow Syntax
让我们先写一个ES5 function
```javascript
var sum = function( a, b ) {
    return a + b;
};
```
