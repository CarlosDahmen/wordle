import React, { useEffect } from "react";
import Grid from "./Grid";
import { useGameDetails } from "../context/GameDetails.jsx";
import Keypad from "./Keypad";
import Modal from "./Modal";

const Game = () => {
  const {
    handleKeyDown,
    pastGuesses,
    word,
    turn,
    usedKeys,
    gameState,
    targetWord,
    resetGame,
    message,
  } = useGameDetails();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    if (gameState === "won") {
      window.removeEventListener("keydown", handleKeyDown);
    }

    if (gameState === "lost") {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, gameState]);

  return (
    <div>
      <h1>WORDLE</h1>
      <h2>{message}</h2>
      <Grid guesses={pastGuesses} currentGuess={word} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {gameState !== "playing" && (
        <Modal
          outcome={gameState}
          solution={targetWord}
          turn={turn}
          reset={resetGame}
        />
      )}
    </div>
  );
};

export default Game;
