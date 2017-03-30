### Mixin
是可以重用的代码块，使用
```scss
@mixin left {
	float:left;
}
```
使用@include 命令，调用这个mixin
```scss
div{
　@include left;
}
```
mixin 的强大之处在于可以指定参数和缺省值。
```scss
　@mixin left($value: 10px) {
　　　　float: left;
　　　　margin-right: $value;
　　}
```
### 颜色函数
```scss
　　lighten(#cc3, 10%) // #d6d65c
　　darken(#cc3, 10%) // #a3a329
　　grayscale(#cc3) // #808080
　　complement(#cc3) // #33c
```
### 插入文件
使用@import 命令，用来插入外部文件
```@import "path/filename.scss";```

















