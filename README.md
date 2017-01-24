# learn-vue-code
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
