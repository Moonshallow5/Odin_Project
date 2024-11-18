
humancount=0
compcount=0
count_tot=0
document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click',()=> playRound(('paper'),getComputerChoice()))
document.getElementById('scissors').addEventListener('click',()=> playRound(('scissors'),getComputerChoice()))
function getComputerChoice() {
    const x=Math.random()*3
    console.log(x)
    if(x<=1){
        return "rock"
    }
    else if(x<=2){
        return "scissors"
    }
    else{
        return "paper"
    }
}
function getHumanChoice(){
    y=prompt('Enter rock, paper or scissors').toLowerCase()
    if(y=='rock' || y=='paper' || y=='scissors'){
        return y
    }
    else{
        console.log("Please enter the right word")
    }

}

function playRound(human,compu) {
    const roundResult=document.getElementById('roundResult')
    const score=document.getElementById('score')


    if((human=='rock' && compu=='scissors') || (human=='scissors' && compu=='paper') || (human=='paper' && compu=='rock')){
        humancount+=1
        roundResult.textContent=`Human wins, ${human} beats ${compu}`

    }
    else if(human==compu){
        roundResult.textContent=`Both chose ${human}`
        
    }
    else{
        compcount+=1
        roundResult.textContent=`Computer wins, ${compu} beats ${human}`
    }
    score.textContent = `Score: Human ${humancount} - Computer ${compcount}`;
    count_tot+=1
    console.log(`Count total is ${count_tot}`)
    if (count_tot=== 5) {
        endGame();
    }
    
}
function endGame() {
    if(compcount>humancount){
        gameResult.textContent = `Computer wins the game ${compcount} to ${humancount}.`

    }else if(humancount>compcount){
        gameResult.textContent=` Human wins the game ${humancount} to ${compcount}`
    }
    else{
        gameResult.textContent=`It's a tie ${humancount} to ${compcount}`
    }

    // Disable buttons after the game is over
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
    if(humancount>compcount){
        console.log(`Human wins ${humancount} to ${compcount}`)
    }else if(compcount>humancount){
        console.log(`Computer wins ${compcount} to ${humancount}`)
    }
    else{
        console.log(`It's a tie with score of ${humancount} `)
    }
    
}

