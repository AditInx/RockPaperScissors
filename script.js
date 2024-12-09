let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll( ".choice" );
const msg = document.querySelector( "#msg" );
const userScorePara = document.querySelector( "#user-score" );
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector( "#reset-btn" );

const genCompChoice = () =>
{
  const options = [ "rock", "paper", "scissors" ];
  const randIdx = Math.floor( Math.random() * 3 );
  return options[ randIdx ];
  //rock, paper, scissors
}


const drawGame = () =>
{
  console.log( "game was draw." );
  msg.innerText = "Game was draw. Play again. ";
  msg.style.backgroundColor = "grey";
}


const showWinner = ( userWin,userChoice, compChoice ) =>
{
  if ( userWin )
  {
    console.log( "You Win!" );
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else
  {
    compScore++;
    compScorePara.innerText = compScore;
    console.log( "You Lose!" );
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}


// generate a random choice from computer and then compare who will win computer or user and update the score accordingly
const playGame = (userChoice) =>
{
  console.log( "user choice = ", userChoice );

  //Generate computer choice
  const compChoice = genCompChoice();
  console.log( "comp choice = ", compChoice );

  if ( userChoice === compChoice )
  {
    //Draw Game
    drawGame();
  }
  else
  {
    let userWin = true;
    if ( userChoice === "rock" )
    {
      //computer choices -> scissors,paper
      userWin = compChoice === "paper" ? false : true;
    }
    else if ( userChoice === "paper" )
    {
      //computer choices -> rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    }
    else
    {
      //computer choices -> rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner( userWin,userChoice,compChoice );
  }
}


choices.forEach( ( choice ) =>
{
  // console.log( choice );
  choice.addEventListener( "click", () =>
  {
    const userChoice = choice.getAttribute( "id" );
    // console.log( "choice was clicked",userChoice);
    playGame( userChoice );
  })
} )



const resetGame = () =>
{
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Play your move!";
  msg.style.backgroundColor = "white";
  
  console.log( "Game has been reset." );
}

resetBtn.addEventListener( "click", resetGame );