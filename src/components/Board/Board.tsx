import React from "react";
import BoardCell from "./BoardCell";
import { itemsProps } from "../../types";

interface Props {
  items: itemsProps[];
  openCell: (id: number) => void;
  gameOver: boolean;
}

const Board: React.FC<Props> = ({ items, openCell, gameOver }) => {
  const classNames = ["board"];

  if (gameOver) {
    classNames.push("board-stop");
  }

  return (
    <React.Fragment>
      <p
        className="victory-text"
        style={gameOver ? { display: "block" } : { display: "none" }}
      >
        You won!
        <span>Click Restart for the new Game</span>
      </p>
      <div className={classNames.join(" ")}>
        {items.map((item) => (
          <BoardCell
            key={item.id}
            item={item}
            onCellClick={() => openCell(item.id)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Board;