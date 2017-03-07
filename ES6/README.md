## ES6

### 编程风格
* let 可以完全取代 var
* 静态字符串使用单引号或者反引号，动态字符串使用反引号

### 数组
使用扩展运算符复制数组
``` const itemCopy = [...items];```
类似数组的对象转换为数组
```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```



