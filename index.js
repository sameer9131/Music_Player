var mysong=document.getElementById("mySong");
var icon=document.getElementById("icon");

icon.onclick=function(){
   if(mysong.paused){
    mysong.play()
   icon.src="file:///D:/Web%20Devlopment%20Course/My%20JavaScript%20Project/Music%20Player/pause.jpg"
   setTimeout(() => {
    icon.src="file:///D:/Web%20Devlopment%20Course/My%20JavaScript%20Project/Music%20Player/play.jpg"
   }, 20000);
   }
   else{
    mysong.pause()
    icon.src="file:///D:/Web%20Devlopment%20Course/My%20JavaScript%20Project/Music%20Player/play.jpg"
   }
}