let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// console.log(getComputerChoice());

const getHumanChoice = () => {
  humanChoice = prompt("Enter rock, paper, or scissors");

  return humanChoice[0].toLowerCase() + humanChoice.slice(1).toLowerCase();
};

// console.log(getHumanChoice());

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(
      `You chose ${humanChoice}, and the computer chose ${computerChoice}, it's a draw!`
    );
    return "draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You chose ${humanChoice} and the computer chose ${computerChoice}, you win!`
    );
    return "win";
  } else {
    console.log(
      `You chose ${humanChoice} and the computer chose ${computerChoice}, you lose!`
    );
    return "lose";
  }
};

const playGame = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }
  }
};

playGame();

console.log(`Current Score ---- You: ${humanScore} Computer: ${computerScore}`);
