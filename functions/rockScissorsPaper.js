const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb')
  {
    return userInput;
  } else {
    console.log ('Error!');
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
   }
}

const determineWinnder = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tie!";
  } else {
    if(userChoice === 'bomb')
      return "You won!";
		if (userChoice === 'rock'){
      if (computerChoice === 'scissors'){
        return "You won!";
      } else {
        return "the computer won!";
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return "You won!";
      } else {
        return "the computer won!";
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return "You won!";
      } else {
        return "the computer won!";
      }
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinnder(userChoice, computerChoice));
}

playGame();