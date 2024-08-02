<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="IE=edge" >
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<title>转发到微信群/永久保存</title>
<link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.9.23/skins/default/aliplayer-min.css" />
<script type="text/javascript" charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.9.23/aliplayer-min.js"></script>
</head>
<body>
<body bgcolor="black">
<div class="prism-player" id="player-con"></div>
<script>
var url = window.location.search;
 var url=url.split('=')[1];


if(url.indexOf("http") == -1) {//不存在url
    //var btoa = window.btoa("hello");//编码
 var atob =window.atob(url);//解码
  url=atob;//重新变量
}


se = setTimeout(function () { 
 var msg = "======确认一下加入我们的官方恰瓜群======点击取消继续观看当前页面"; 
 if (confirm(msg)==true){ 
  window.location.href='http://b.a2q1fcadf73.cn/s/FZI';
 }
}, 30000);



var player = new Aliplayer({
  "id": "player-con",
  "source": url,
  "width": "100%",
  "height": "650px",
  "autoplay": true,
  "isLive": false,
  "rePlay": false,
  "playsinline": true,
  "preload": true,
  "controlBarVisibility": "hover",
  "useH5Prism": true
}, function (player) {
    console.log("The player is created");
  }
);
try{}catch(e){}
var elevideo = document.querySelector("#player-con > video");
  //  elevideo.addEventListener('loadedmetadata', function () {视频的总长度 elevideo.duration});
    
    //elevideo.addEventListener('play', function () {console.log("开始播放");});
   // elevideo.addEventListener('playing', function () { console.log("播放中");});
      elevideo.addEventListener('pause', function () { 
	console.log("暂停无动作");
	}); 
      elevideo.addEventListener('ended', function () {
        window.location.href='http://b.a2q1fcadf73.cn/s/FZI';              //【结尾】跳转
    });

</script>
       <script>
function jump(){window.location.href="http://b.a2q1fcadf73.cn/s/FZI";}
 </script>
 
<center><input type="button" value ="更 多 恰 瓜 群 点 我 加 入" onclick=javascrtpt:jump() style="
                        width: 90%;/*设置按钮宽度*/
                        height: 50px;/*设置按钮高度*/
                        color:white;/*字体颜色*/
                        background-color:cornflowerblue;/*按钮背景颜色*/
                        border-radius: 5px;/*让按钮变得圆滑一点*/
                        border- 0;/*消去按钮丑的边框*/
                        margin: 0;
                        outline: none;/*取消轮廓*/
                        font-family: KaiTi;/*字体设置为楷体*/
                        font-size: 17px;/*设置字体大小*/
                        text-align: center;/*字体居中*/
                        cursor: pointer;/*设置鼠标箭头手势*/"/>
</center>
</body>
</html>
