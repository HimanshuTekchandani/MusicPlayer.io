console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex='at_my_worst';
let songIndexNumber=1;
let audioElement = new Audio(`${songIndex}.mp3`);
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

function changeSongIndexNumber(x){
    if (x=='at_my_worst')songIndexNumber=1;
    else if (x=='in_the_end')songIndexNumber=2;
    else if (x=='lay_lay')songIndexNumber=3;
    else if (x=='love_nwantiti')songIndexNumber=4;
    else if (x=='mere_yaaraa')songIndexNumber=5;
    else if (x=='radha_rani')songIndexNumber=6;
    else if (x=='runaway')songIndexNumber=7;
    else if (x=='safarnama')songIndexNumber=8;
    else if (x=='tokyo_drift')songIndexNumber=9;
    else if (x=='unstoppable')songIndexNumber=10;

}

function changeSongIndex(x){
    if (x==1)songIndex='at_my_worst';
    else if (x==2)songIndex='in_the_end';
    else if (x==3)songIndex='lay_lay';
    else if (x==4)songIndex='love_nwantiti';
    else if (x==5)songIndex='mere_yaaraa';
    else if (x==6)songIndex='radha_rani';
    else if (x==7)songIndex='runaway';
    else if (x==8)songIndex='safarnama';
    else if (x==9)songIndex='tokyo_drift';
    else if (x==10)songIndex='unstoppable';

}

let songs =[
    {songName: "At My Worst",filePath: "at_my_worst.mp3", coverPath:"at my worst.jpg" },
    {songName: "In The End",filePath: "in_the_end.mp3", coverPath:"in the end.jpg" },
    {songName: "Lay Lay",filePath: "lay_lay.mp3", coverPath:"lay lay.jpg" },
    {songName: "Love Nwantiti",filePath: "love_nwantiti.mp3", coverPath:"love nwantiti.jpg" },
    {songName: "Mere Yaaraa",filePath: "mere_yaaraa.mp3", coverPath:"mere yaaraa.jpg" },
    {songName: "Radha Rani",filePath: "radha_rani.mp3", coverPath:"radha rani.jpg" },
    {songName: "Runaway",filePath: "runaway.mp3", coverPath:"runaway.png" },
    {songName: "Safarnama",filePath: "safarnama.mp3", coverPath:"safarnama.jpg" },
    {songName: "Tokyo Drift",filePath: "tokyo_drift.mp3", coverPath:"tokyo drift.jpg" },
    {songName: "Unstoppable",filePath: "unstoppable.mp3", coverPath:"unstoppable.jpg" },
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');

        console.log(songIndex);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
         
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');

        console.log(songIndex);
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        // console.log(e.target);
        makeAllPlays();
        // index=parseInt(e.target.id);
        songIndex=e.target.id;
        console.log(songIndex);
        changeSongIndexNumber(songIndex);
        // console.log(songIndexNumber);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndexNumber-1].songName;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    makeAllPlays();
    if(songIndexNumber>9){
        songIndexNumber=1;
    }
    else{
        songIndexNumber+=1;
    }
    changeSongIndex(songIndexNumber);
    console.log(songIndex);

    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');

    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndexNumber-1].songName;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click',()=>{
    makeAllPlays();
    if(songIndexNumber<2){
        songIndexNumber=10;
    }
    else{
        songIndexNumber-=1;
    }
    changeSongIndex(songIndexNumber);
    console.log(songIndex);

    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');

    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndexNumber-1].songName;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

