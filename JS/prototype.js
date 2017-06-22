/*
    从原型到原型链
*/
function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin

//使用new创建了一个实例对象

function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin

// _proto_
// 每一个对象都会具有的一个属性， 会指向该对象的原型
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
// 实例对象和构造函数都可以指向原型，原型的属性constructor 是可以指向构造函数的
function Person() {

}
console.log(Person === Person.prototype.constructor); // true


console.log(Object.prototype.__proto__ === null);
// true
// null代表没有对象
// 原型链
// 在《JavaScript权威指南》第六版 8.7.2 节，讲到每一个函数都包含一个 prototype 属性，然后紧接着在 8.7.4 节 bind 函数，就讲到由 bind 方法返回的函数并不包含 prototype 属性。