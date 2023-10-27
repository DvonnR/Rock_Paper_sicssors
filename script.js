console.log("connected");

var pOneScore = 0;
var pTwoScore = 0;
var tieScore = 0;
var pOnemove = "";
var pTwoMove = "";
var choice = ["✊", "✋", "✌️"]
var reset = document.getElementById("reset");
var p1 = document.getElementById("p1Display");
var p2 = document.getElementById("p2Display");
var r1 = document.getElementById("rock");
var pap = document.getElementById("paper");
var s1 = document.getElementById("scissor");
var info = document.getElementById("res");
var score1 = document.getElementById("res1");
var score2 = document.getElementById("res2");
var score3 = document.getElementById("res3");

function restart(){
    pOneScore = 0;
    pTwoScore = 0;
    tieScore = 0;
    score3.innerText = tieScore;
    score2.innerText = pTwoScore;
    score1.innerText = pOneScore;
    p1.innerText = " ";
    p2.innerText = " ";
    random1 = 0;
    document.inner
    console.log("You reset the game!");

}

r1.addEventListener('click',function(){
    var random1 = Math.floor(Math.random() * 3);
    p1.innerText = "✊";
    console.log(random1);

    if(random1 == 0){
        p2.innerText = "✊";
        tieScore++;
        score3.innerText = tieScore;
        console.log("tie");
    }
    else if(random1 == 1){
        p2.innerText = "✋";
        pTwoScore++
        score2.innerText = pTwoScore;
        console.log("loss");

    }
    else if(random1 == 2){
        p2.innerText = "✌️";
        pOneScore++;
        score1.innerText = pOneScore;
        console.log("win");
    }
})

pap.addEventListener('click',function(){
    var random1 = Math.floor(Math.random() * 3);
    p1.innerText = "✋";
    console.log(random1);

    if(random1 == 0){
        p2   .innerText = "✋";
        tieScore++;
        score3.innerText = tieScore;
        console.log("tie");
    }
    else if(random1 == 1){
        p2   .innerText = "✌️";
        pTwoScore++
        score2.innerText = pTwoScore;
        console.log("loss");

    }
    else if(random1 == 2){
        p2   .innerText = "✊";
        pOneScore++;
        score1.innerText = pOneScore;
        console.log("win");
    }
})

s1.addEventListener('click',function(){
    var random1 = Math.floor(Math.random() * 3);
    p1.innerText = "✌️";
    console.log(random1);

    if(random1 == 0){
        p2.innerText = "✌️";
        tieScore++;
        score3.innerText = tieScore;
        console.log("tie");
    }
    else if(random1 == 1){
        p2.innerText = "✊";
        pTwoScore++
        score2.innerText = pTwoScore;
        console.log("loss");

    }
    else if(random1 == 2){
        p2.innerText = "✋";
        pOneScore++;
        score1.innerText = pOneScore;
        console.log("win");
    }
})

function random(){
    
}

console.log(random);