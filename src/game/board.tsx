
import React from 'react';
import BoardSquare from './board-square';

export interface BoardState {
  squares : Array<string>,
  onClick(i : number) : void
}

export default function Board(props : BoardState) {
  const { squares, onClick } = props;

  const renderSquare = (i : number ) => {
    return <BoardSquare 
      value={squares[i]} 
      onClick={() => onClick(i)}
    />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
