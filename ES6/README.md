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
#### 立即执行函数
```javascript
(()=>{
    console.log();
})()
```
### function
```javascript
[1,2].map((x)=>{
   return x * x; 
});

```
使用默认语法设置函数参数的默认值
```javascript
function handle(obj = {}){
    
}
```
### Map 结构
只有模拟实体对象的时候，才用Object，如果只需要key:value的数据结构，则使用Map
### Class
总是用Class取代需要prototype 的操作。 因为Class的写法更简洁，更易于理解
### Module
是JS模块的标准写法，要坚持这种写法。
* 使用import取代require。
* 使用export 取代module.exports 
* 如果模块只有一个输出值，就使用export default；如果模块有多个输出值，就不使用，另外export 与export default不要同时使用；
* 如果默认输出一个函数，那么首字母应该小写，如果默认输出一个对象，那么首字母应该大写
* export 除了可以输出变量，还可以输出类和函数；
* import 命令，import {a} from './a';
* 整体加载，import * as mm from './das';
* module 命令 可以达到整体加载的效果，module mm from './cd';
* ES6的加载机制跟commonJS完全不同，cJ模块输出的是一个值的拷贝，但是ES6输出的是值的引用；
* 













