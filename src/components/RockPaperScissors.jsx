import React, { useState } from "react";

// Classic little game, but with some React flavor
const RockPaperScissors = () => {
  // What the computer picks
  const [computerChoice, setComputerChoice] = useState("");
  // Result
  const [result, setResult] = useState("");
  // Keeping score for the player
  const [userScore, setUserScore] = useState(0);
  // And for the computer too (unfortunately)
  const [computerScore, setComputerScore] = useState(0);

  // The only three moves you’ll ever need
  const choices = ["Rock", "Paper", "Scissors"];

  // Randomly pick one of the three for the computer
  const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  // Main game logic
  const playGame = (userChoice) => {
    const computer = getComputerChoice();

    if (userChoice === computer) {
      setResult("It's a draw!");
    } else if (
      (userChoice === "Rock" && computer === "Scissors") ||
      (userChoice === "Paper" && computer === "Rock") ||
      (userChoice === "Scissors" && computer === "Paper")
    ) {
      setUserScore((prev) => prev + 1); // nice!
      setResult("You win!");
    } else {
      setComputerScore((prev) => prev + 1); // womp womp
      setResult("You lose!");
    }
  };

  return (
    <div className="rps-game">
      <h4>Can you beat the computer?</h4>
      <p>Choose wisely!</p>

      {/* Buttons for the player to make their choice */}
      <div className="button-group">
        <button onClick={() => playGame("Rock")}>Rock</button>
        <button onClick={() => playGame("Paper")}>Paper</button>
        <button onClick={() => playGame("Scissors")}>Scissors</button>
      </div>

      {/* Shows what the computer "chose" */}
      <div id="computer-choice">Computer chose: {computerChoice}</div>

      {/* Result */}
      <div id="result">{result}</div>

      {/* Just a simple score tracker to keep things interesting */}
      <div className="scoreboard">
        <p>
          Scoreboard: <br />
          You: {userScore} | Computer: {computerScore}
        </p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
