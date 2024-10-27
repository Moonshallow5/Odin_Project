
humancount=0
compcount=0
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

    if((human=='rock' && compu=='scissors') || (human=='scissors' && compu=='paper') || (human=='paper' && compu=='rock')){
        humancount+=1
        console.log(`Human wins, ${human} beats ${compu}`)

    }
    else if(human==compu){
        console.log(`Both chose ${human}`)
        return
    }
    else{
        compcount+=1
        console.log(`Computer wins, ${compu} beats ${human}`)
    }
    
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
playGame()

