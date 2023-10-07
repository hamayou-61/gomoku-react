import { useState } from 'react';
import Board from './components/Board';
import './Game.css';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isAscending, setIsAscending] = useState(true);

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handleBack() {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `${move+1}手目から開始`;
    } else {
      description = "ゲームをリセット";
    }

    if (move === currentMove) {
      return (
        <li key={move}>
          現在{move + 1}手目
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  if(!isAscending) {
    moves.reverse();
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          <button onClick={handleBack}>
            前へもどる
          </button>

        </div>
        <div className="game-info">
          <button onClick={() => setIsAscending(!isAscending)}>
            {isAscending ? "降順" : "昇順"}
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}