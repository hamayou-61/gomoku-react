import Square from './Square';
import calculateWinner from '../helpers/calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (squares: Array<string | null>) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "○";
    } else {
      nextSquares[i] = "●";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "勝者は: " + winner;
  } else {
    status = "次のプレイヤー: " + (xIsNext ? "○" : "●");
  }

  const renderRows = [];
  for (let row = 0; row < 3; row++) {
    const columns = [];
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      columns.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    renderRows.push(
      <div key={row} className="board-row">
        {columns}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {renderRows}
    </>
  );
}
