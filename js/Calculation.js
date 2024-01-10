var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qaSet');
var qaAnswersRow = document.querySelectorAll('.qaSet .qaAnswersRow input');

skip.addEventListener('click',function(){
    step()
    duration = 6
})

qaAnswersRow.forEach(function(qaAnswersRowSingle){
    qaAnswersRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
            duration = 6
        },500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 10;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
        else{
            scoreCount -= 0;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount; 
        }
    })
})
function step(){
    count += 1;
    for(var i = 0; i < qaSet.length; i++){
        qaSet[i].className='qaSet';
    }
    qaSet[count].className='qaSet active';
    if(count == 10){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function(){
    if(duration == 6){ 
        duration = 0;
    }
    duration +=1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == "6"){
        step()
    }
},1000);
