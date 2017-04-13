//URL scheme 实现方案
var iframe = document.createElement('iframe');
iframe.style.display = 'none';
var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);

if(userAgent.match(/(iPhone|iPod|iPad);?/i)){
    //抛出schemes,打开app对应页面
    window.location.href = "apps custom url schemes";

    //由于部分ios中打开app后，WAP页面会被挂起，定时器不会被执行。因此可以做下优化：
    //WAP页重新被聚焦后，如果超过1s，认为APP被打开了，重新聚焦时就不必再跳转到APP下载页
    var loadDateTime = Date.now();
    window.setTimeout(function () {
        var timeOutDateTime = Date.now();
        if (timeOutDateTime - loadDateTime < 1000) {
            window.location.href = "app下载页面";
        }
    }, 25);
}else{
    //抛出schemes,打开app对应页面
    iframe.src = "apps custom url schemes"

    //跳转下载页
    setTimeout(function () {
        window.location.href = "app下载页面";
    }, 500);
}

//通用链接实现方案






















