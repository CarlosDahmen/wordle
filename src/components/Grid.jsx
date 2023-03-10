import React from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
  return (
    <div data-testid="grid">
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row currentGuess={currentGuess} key={i} />;
        }
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
