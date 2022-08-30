console.log("Hello from JavraScript! ")
const songList = [
    {
       imageLink:"./1862a497123c80b6f4143877ba823280.1000x1000x1.png",
       title:"Responsabilități",
       album:"Ștefan III",
       duration:"2:57"
    },
    {
       imageLink:"./cali.jpeg",
       title:"Altcnv",
       album:"Femei băutură necaz",
       duration:"3:41"

    },
    {
        imageLink:"./Drake_-_Certified_Lover_Boy.png",
        title:"N 2 Deep",
        album:"Certified Lover Boy",
        duration:"4:33"
    
    },
    {
        imageLink:"./hn drake.jpg",
        title:"Sticky",
        album:"Honestly nevermind",
        duration:"4:03"  
    },
];

window.onload = function (){
    const songsWrapper=document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    for(let i=0; i< songList.length;i++){
        songsWrapper.innerHTML += melodyComponent (i+ 1, songList[i]);
    }
}
const melodyComponent = function(index,songInfo){
    return `<div class="melody">
    <span class="song-nr">
      ${index}
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
    </img>
    <span class="song-title">
     ${songInfo.title}
    </span>
    <span class="song-album">
      ${songInfo.album}
    </span>
    <span class="song-duration">
      ${songInfo.duration}
    </span>
</div>`
}