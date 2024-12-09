let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll( ".choice" );



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
}


const showWinner = ( userWin ) =>
{
  if ( userWin)
  {
    console.log( "You Win!" );
  }
  else
  {
    console.log( "You Lose!" );
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
    showWinner( userWin );
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
})