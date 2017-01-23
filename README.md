# learn-vue-code
A study note for vue
PS: 自己一点点看，一点点的研究，所以会写的有些乱～～～～
## 文件结构的梳理
* 源码是放在src目录里面的，主要是看这个目录下的东西。
* 从src/core 这个目录下开始研究
* 进入core之后，直接打开index.js，从这里开始看源码


## 代码的一些细节

### src/core/index.js
```javascript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
```
引入这几个文件的index

`initGlobalAPI(Vue)` //初始化全局的VUE

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

#### ./init





## 一点小总结
