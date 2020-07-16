'use strict'

let images = ['back.png','next.png','diagonal-arrow-down.png','diagonal-arrow-up.png','download.png','up-arrow.png','double-arrow.png','move.png'];
let imagesRepeat = ['back.png','next.png','diagonal-arrow-down.png','diagonal-arrow-up.png','download.png','up-arrow.png','double-arrow.png','move.png'];

let ImagesLength = images.length;
let imagesRepeatLength = imagesRepeat.length;
let i = 0;
let randomImageName = "";
let shuffledImageName = "";
let matchingPairs = 0;
let ShuffledImagesId = "";
let randomImageId = "";

function toggleBtn () {
    document.getElementById('newGameBtn').innerHTML = ''
    const stopBtn = '<button class="btn-Button first-button" onclick="stopGame();">Stop Game</button>'
    document.getElementById('newGameBtn').innerHTML = stopBtn
}
function stopGame () {
    document.getElementById('newGameBtn').innerHTML = ''
    const stopBtn = '<button class="btn-Button first-button" onclick="toggleBtn();">New Game</button>'
    document.getElementById('newGameBtn').innerHTML = stopBtn
}
function setTimer () {
    document.getElementById('totalPairs').innerHTML = '0'
    var delayInMilliseconds = 1000 // 1 second

    setInterval(() => {
        const date = new Date()
        document.getElementById('demo').innerHTML = date.getSeconds()
    }, 3000)
}



function randomImageGenerator(){
    let minValue = 0;
    let ranNums = [];

    while (ImagesLength--) {

        i = Math.floor(Math.random() * (ImagesLength+1));
        //ranNums.push(images[i]);
        let RanImages = images.splice(i,1);

        document.getElementById('generateImages').innerHTML += '<div class="arrowImage"><img class="randomlyGeneratedImages" id="img'+ImagesLength+'" src="images/arrows/'+RanImages+'"></div>';
    }
    $(document).ready(function(){
        $(".randomlyGeneratedImages").click(function(){
            randomImageName = $(this).attr("src");
            randomImageId = $(this).attr("id");
            //console.log(randomImageId);
            matchPairs();
        });
    });

}
function shuffledImageGenerator() {
    let counter = imagesRepeatLength;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = imagesRepeat[counter];
        imagesRepeat[counter] = imagesRepeat[index];
        imagesRepeat[index] = temp;
    }
    return imagesRepeat;
}
function showImages(){
    let shuffledImagesResult;
    let shuffledImages = shuffledImageGenerator();
    for(i; i < imagesRepeatLength; i++){
        shuffledImagesResult = '<div class="arrowImage"><img class="ShuffledImages" id="imgShuffled'+i+'" src="images/arrows/'+shuffledImages[i]+'"></div>';
        document.getElementById('generateImages').innerHTML+=shuffledImagesResult
    }
    $(document).ready(function(){
        $(".ShuffledImages").click(function(){
            shuffledImageName = $(this).attr("src");
            ShuffledImagesId = $(this).attr("id");
            //console.log(ShuffledImagesId);
            matchPairs();
        });

        $(".arrowImage").click(function(){
            $(this).children().css("display","inline");
        });
    });

}
function matchPairs(){
    if(randomImageName === shuffledImageName){
        matchingPairs = ++matchingPairs;
        document.getElementById('totalPairs').innerHTML = matchingPairs;
        disableImagesClick();
    }

    if(randomImageName !== shuffledImageName){
            /*$(randomImageId).css("display","none").delay(5000);
            $(ShuffledImagesId).css("display","none").delay(5000);*/
            //console.log("not match");
        alert("!!!!")
    }
}
function disableImagesClick() {
    ShuffledImagesId;
    randomImageId;
    if(ShuffledImagesId !== "" && randomImageId !== ""){
        $("#"+randomImageId).off("click");
        $("#"+ShuffledImagesId).off("click");
    }
}


randomImageGenerator();
showImages();
