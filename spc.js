let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const rock_div = document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const res_p=document.getElementById("paragraph");
const userWord="(user)".fontsize(3).sub();
const compWord="(comp)".fontsize(3).sub();
//console.log(rock_div)
function convertWord(letter){
    if(letter==="p") return "Paper"
    if(letter==="r") return  "Rock"
    else return "Scissors"
}
function win(user_Choice,computer_Choice){
    userScore=userScore+1;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    res_p.innerHTML=`${convertWord(user_Choice)}${userWord} beats ${convertWord(computer_Choice)}${compWord}.You Win 🔥`;
    document.getElementById(user_Choice).classList.add('gold-glow')
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('gold-glow')

    },400)
}
function lose(user_Choice,computer_Choice){
    computerScore=computerScore+1;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    res_p.innerHTML=`${convertWord(user_Choice)}${userWord} get's defeated to the ${convertWord(computer_Choice)}${compWord}.You Lose 💩`;
    document.getElementById(user_Choice).classList.add('red-glow')
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('red-glow')

    },400)
}
function draw(user_Choice,computer_Choice){
    res_p.innerHTML=`${convertWord(user_Choice)}${userWord} equal's to the ${convertWord(computer_Choice)}${compWord}.DRAW🙂`;
    document.getElementById(user_Choice).classList.add('grey-glow')
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('grey-glow')

    },400)

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