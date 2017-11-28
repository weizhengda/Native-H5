
var u = navigator.userAgent.toLowerCase()
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

if (isAndroid) {
    function android() {
        /***打开app的协议，有安卓同事提供***/
        window.location.href = "openwjtr://com.tyrbl.wjtr"; 
        window.setTimeout(function () {
        /***打开app的协议，有安卓同事提供***/
        window.location.href = "http://www.wjtr.com/download/index.html";
        }, 2000);
    }
}

if(isiOS){
    function ios(){
      var ifr = document.createElement("iframe");
      /***打开app的协议，有ios同事提供***/
      ifr.src = "openwjtr://com.tyrbl.wjtr"; 
      ifr.style.display = "none"; 
      document.body.appendChild(ifr);
      window.setTimeout(function(){
        document.body.removeChild(ifr);
         /***下载app的地址***/
         window.location.href = "http://www.wjtr.com/download/index.html"; 
      },2000)
    }
}