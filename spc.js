let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const rock_div = document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const res_p=document.getElementById("paragraph");
const user_extra_td=document.getElementById("user_extra")
const computer_extra_td=document.getElementById("computer_extra")
const hidden_div=document.getElementById("ext");
const userWord="(user)".fontsize(3).sub();
const compWord="(comp)".fontsize(3).sub();
const winAudio=document.getElementById("win");
const loseAudio=document.getElementById("lose");
const drawAudio=document.getElementById("draw");
function audio(selectedAudio){
    selectedAudio.pause()
    selectedAudio.currentTime=0;
    selectedAudio.play()
}

function computerData(choice){
    setTimeout(function(){
    if(choice=='p') {
        computer_extra_td.src="paper.jpeg"
    }
    else if(choice=='r') {
        computer_extra_td.src="rock-3.png"
    }
    else {
        computer_extra_td.src="scissor.png"
    }
},400)

}

function userData(choice){
    if(choice=='p') {
        user_extra_td.src="paper.jpeg"
    }
    else if(choice=='r') {
        user_extra_td.src="rock-3.png"
    }
    else {
        user_extra_td.src="scissor.png"
    }
    

}

function win(user_Choice,computer_Choice){
    res_p.innerHTML="";
    setTimeout(function(){
        userScore=userScore+1;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        res_p.innerHTML=`You Win 🔥`;
        document.getElementById(user_Choice).classList.add('gold-glow')
        audio(winAudio); 
    },400)
    
    userData(user_Choice)
    computer_extra_td.src=""
    computerData(computer_Choice)
    hidden_div.classList.remove("extra")
    hidden_div.classList.add("extraShow")
    //audio(winAudio);
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('gold-glow')

    },600)
}
function lose(user_Choice,computer_Choice){
    res_p.innerHTML="";
    setTimeout(function(){
        computerScore=computerScore+1;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        res_p.innerHTML=`You Lose 💩`;
        document.getElementById(user_Choice).classList.add('red-glow')
        audio(loseAudio);
        
    },400)
    userData(user_Choice)
    computer_extra_td.src=""
    computerData(computer_Choice)
    hidden_div.classList.remove("extra")
    hidden_div.classList.add("extraShow")
    //audio(loseAudio);
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('red-glow')

    },600)
}
function draw(user_Choice,computer_Choice){
    res_p.innerHTML="";
    setTimeout(function(){ res_p.innerHTML=`DRAW🙂`;
    document.getElementById(user_Choice).classList.add('grey-glow')
    audio(drawAudio);},400)
    userData(user_Choice)
    computer_extra_td.src=""
    computerData(computer_Choice)
    hidden_div.classList.remove("extra")
    hidden_div.classList.add("extraShow")
    //audio(drawAudio);
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('grey-glow')

    },600)

}

function computerChoice(){
    let avialableChoice=["p","r","s"]
    let computerChoice=Math.floor(Math.random()*3)
    return avialableChoice[computerChoice]
    
}

function gam(user_Choice) {
    let computer_Choice=computerChoice();
    switch(user_Choice+computer_Choice){
        case "sp":
        case "rs":
        case "pr":
            win(user_Choice,computer_Choice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(user_Choice,computer_Choice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(user_Choice,computer_Choice);
            break;

    }
    
}
function main(){
rock_div.addEventListener('click',()=>gam("r"))
paper_div.addEventListener('click',()=>gam("p"))
scissor_div.addEventListener('click',()=>gam("s"))
}
main();