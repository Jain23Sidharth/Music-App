
var arrayOfObjects = [{
  "songNames": "Mitwa",
  "image": "mitwa",
  "artist":"Shankar Mahadevan"
}, {
  "songNames": "Liggi",
  "image": "liggi image",
  "artist":"Ritviz"
}, {
  "songNames": "Thand",
  "image": "thand",
  "artist":"Ritviz"
},{
  "songNames": "Thand",
  "image": "thand",
  "artist":"Ritviz"
}];

var i=0;
var playCounter=0; //plays when =1
var pauseCounter=0; //pauses when =1






let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
  console.log(e.currentTarget.value); //The currentTarget is the input tag
x.volume = e.currentTarget.value / 100;
})




document.querySelector(".play-button").addEventListener("click",function(){
  var object=arrayOfObjects[i];
  var currImage=object.image;
  var currSong=object.songNames;

  document.getElementsByTagName("img")[0].setAttribute("src","images/"+currImage+".jpeg");
  document.getElementsByTagName("h1")[0].innerHTML=currSong;

  
  if(playCounter==0)
  {
   
    document.getElementsByTagName("source")[0].setAttribute("src","Songs/"+currSong+".mp3");
    x = document.getElementById("myAudio"); 
    playCounter=1;
    x.load(); //very important when the source is updated
    x.play();
  }
  else if(playCounter==1)
  {
    if(pauseCounter==0)
    {
      pauseCounter=1;
     x.pause();
     
    }
    else if(pauseCounter==1)
    {
      pauseCounter=0;
      x.play();
     
    }
    console.log(pauseCounter);
  }
});

document.querySelector(".previous").addEventListener("click",function(){
  if(i==0){
    i=2;
  }
  else{
  i--;
  }

  var object=arrayOfObjects[i];
  var currImage=object.image;
  var currSong=object.songNames;

  document.getElementsByTagName("img")[0].setAttribute("src","images/"+currImage+".jpeg");
  document.getElementsByTagName("h1")[0].innerHTML=songNames[i];
  

  document.getElementsByTagName("source")[0].setAttribute("src","Songs/"+currSong+".mp3");
  x = document.getElementById("myAudio"); 
  x.load();
  x.play();

});


document.querySelector(".next").addEventListener("click",function(){
  if(i==2){
    i=0;
  }
  
  else{
  i++;
  }

  var object=arrayOfObjects[i];
  var currImage=object.image;
  var currSong=object.songNames;

  document.getElementsByTagName("img")[0].setAttribute("src","images/"+currImage+".jpeg");
  document.getElementsByTagName("h1")[0].innerHTML=object.songNames;
  
  document.getElementsByTagName("source")[0].setAttribute("src","Songs/"+currSong+".mp3");
  x = document.getElementById("myAudio"); 
  x.load();
  x.play();

});



$('#myAudio').on('timeupdate', function() {
  $('#seekbar').attr("value", this.currentTime / this.duration);
});




