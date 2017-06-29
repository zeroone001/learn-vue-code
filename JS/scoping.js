//JS 是采用词法作用域的，这就意味着函数的执行依赖于函数定义的时候产生的变量的作用域，
//
function objectFactory() {

    var obj = new Object(), //从Object.prototype上克隆一个对象

        Constructor = [].shift.call(arguments); //取得外部传入的构造器

    var F = function() {};
    F.prototype = Constructor.prototype;
    obj = new F(); //指向正确的原型

    var ret = Constructor.apply(obj, arguments); //借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret : obj; //确保构造器总是返回一个对象

};
//类数组对象
// 拥有一个length属性和若干索引属性的对象