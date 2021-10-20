let video = document.getElementById("video1");

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function back(){
    video.currentTime -= 15;
}

function foward(){
    video.currentTime += 15;
}

