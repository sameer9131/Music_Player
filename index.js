var mysong=document.getElementById("mySong");
var icon=document.getElementById("icon");

icon.onclick=function(){
   if(mysong.paused){
    mysong.play()
   icon.src="pause.jpg"
   setTimeout(() => {
    icon.src="play.jpg"
   }, 20000);
   }
   else{
    mysong.pause()
    icon.src="play.jpg"
   }
}
