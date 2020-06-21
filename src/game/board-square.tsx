import React from 'react';

export interface BoardSquareState {
  value : string,
  onClick() : void
}

export default function BoardSquare(props : BoardSquareState) {
  const { value, onClick } = props;

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
