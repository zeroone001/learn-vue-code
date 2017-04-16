//Node 相关JS基础
/*
    与前端JS不同，后端方面除了SSR和爬虫之外，很少会接触DOM，所以关于DOM方面，
    各种基础知识不会讨论，前端很少碰到内存问题，但是后端几乎是直面服务器内存的，
    更加偏向内存方面。

    类型判断
    undefined == null 是true

    作用域
        ES6中 let 与 var 的区别，
    引用传递
        什么类型是引用传递，什么类型是值传递？
        简单说，对象是引用传递，基础类型是值传递
        [1] == [1] 是false
        指针和引用的区别
    内存释放
        JS中不同的类型和不同环境下的变量的内存是何时释放的？
        引用类型是在没有引用之后，通过V8的GC自动回收的，值类型，处于闭包的情况下，
        没有引用会被GC回收，非闭包的情况下等待V8的新生代切换的时候回收。
    ES6新特性
        比较简单的会问 let 与 var 的区别, 以及 箭头函数 与 function 的区别等等.
        深入的话, es6 有太多细节可以深入了. 比如结合 引用 的知识点来询问 const 方面的知识. 结合 {} 的使用与缺点来谈 Set, Map 等. 比如私有化的问题与 symbol 等等.

*/

/*
    箭头函数与普通函数的区别
    PS： http://hughdai.github.io/2017/03/25/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%8E%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB/
    1.箭头函数作为匿名函数，是不能作为构造函数的；
    2.this，普通函数构造函数的this指向了一个新的对象，如果函数是作为对象的
    方法被调用的，那么this指向那个调用他的对象；但是箭头函数的则会捕获其所在上下文
    的this的值，作为自己的this的值；在使用call或者apply绑定时，相当于只是传入了
    参数，对this没有影响。
    3.箭头函数不绑定arguments，取而代之是用rest参数解决；
    4，箭头函数当方法使用的时候没有定义this绑定
    var obj = {
      i: 10,
      b: () => console.log(this.i, this),
      c: function() {
        console.log( this.i, this)
      }
    }
    obj.b(); // prints undefined, Window
    obj.c(); // prints 10, Object {...}
    5.箭头函数不能使用generator函数，不能使用yield关键字
    6.箭头函数不能换行



*/


function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);    
console.log(obj2.item);




