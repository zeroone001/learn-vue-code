# Sticky Footer - 完美的绝对底部

### HTML结构
```javascript
<body>
    <div class=“wx_wrap"></div>
    <div class=“wx_footer"></div>
</body>
```
### CSS 结构
#### absolute
``` javascript
html{
    height: 100%;
}
body {
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
}
.wx_footer {
    position: absolute;
    bottom: 0;
    height: 50px;
}
```
#### table
html, body {
    height: 100%;
}
body {
    display: table;
    width: 100%;
    min-height: 100%;
}
.wx_wrap {
    display: table-row;
    height: 100%;
}
#### calc
```javascript
.wx_wrap {
    min-height: calc(100vh - 50px);
}
.wx_footer {
    height: 50px;
}
```
#### flex
```javascript
html {
    height: 100%;
}
body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.wx_wrap {
flex: 1;
}
```







