# VUE 学习记录
## 杂项
vue 组件的API 有三个部分，props，events，slots
* Props: 允许外部环境传递数据给组件
* events： 允许组件出发外部环境的副作用
* slots： 允许外部环境将额外的内容组合在组件中
```javascript
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat"
>
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
``` 
### 子组件索引
需要在javascript中直接访问子组件。这个时候可以使用ref 为子组件指定一个索引ID
```javascript
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile
```
### 组件命名约定
当注册组件的时候，可以使用： kebab-case ，camelCase ，或 TitleCase 。
但是在HTML模版中，请使用 kebab-case 形式

### 递归组件
组件在他的模版内可以递归的调用自己，但是只有当他有name选项的时候是可以的

### v-once
当组件中包含大量的静态内容的时候，可以考虑使用v-once将渲染的结果缓存起来
```javascript
Vue.component('terms-of-service', {
  template: '\
    <div v-once>\
      <h1>Terms of Service</h1>\
      ... a lot of static content ...\
    </div>\
  '
})
```
### keep-alive
是一个包裹组件，<keep-live>
```javascript
<keep-alive>
  <todo-list v-if="todos.length > 0"></todo-list>
  <no-todos-gif v-else></no-todos-gif>
</keep-alive>
```

### transition
* 作为单个组件的过度效果，不会渲染额外的DOM元素。
* 只是将内容包裹在其中，简单的运用过渡行为。

### 数据绑定思想
基于getter和setter的方式
```javascript
function Vue(option){
  this.init(option);
}
Vue.prototype.init = function(option){
  this._data = option.data || {};
  this._method = option.method || {};
    this.bingdings = {};
    this.elements = typeof option.ele === "string" ? document.querySelectorAll(option.ele) : option.ele;
    this.bind();
    this.observe();
    this.react();
    this.initMvvM();
}
Vue.prototype.bind = function(){
  
}
```
#### Object.defineProperty()
* 会直接在一个对象上定义一个新的属性，或者修改一个已存在的属性，并返回这个对象；
```Object.defineProperty(obj, prop, descriptor)```
* 允许精确的添加或者修改对象的属性
*












# learn-vue-code 源码
A study note for vue
PS: 自己一点点看，一点点的研究，所以会写的有些乱～～～～
## 文件结构的梳理
* 源码是放在src目录里面的，主要是看这个目录下的东西。
* 从src/core 这个目录下开始研究
* 进入core之后，直接打开index.js，从这里开始看源码
* 使用Facebook工具 [flow](https://flowtype.org/)

## 代码的一些细节

### src/core/index.js
```javascript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
```
引入这几个文件的index，分别导入了Vue的核心接口，和API接口，

`initGlobalAPI(Vue)` //安装API

### ./instance/index
```javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
```

```javascript
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```
Vue 函数声明



### \core\config.js
配置文件


### \core\util
核心工具文件
* lang.js 是语言扩展工具
* env.js 环境工具


### \core\observer
数据绑定目录，数据监控器,
index.js
数据监控

### \core\vdom
虚拟DOM目录

### \core\global-api
全局api目录


### \core\instance
实例核心目录

## 一点小总结











