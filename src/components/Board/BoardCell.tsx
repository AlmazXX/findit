import React from "react";
import { itemsProps } from "../../types";
import "./Board.css";

interface Props {
  item: itemsProps;
  onCellClick: React.MouseEventHandler;
}

const BoardCell: React.FC<Props> = ({ item, onCellClick }) => {
  const classNames = ["cell"];

  if (item.clicked && item.hasItem) {
    classNames.push("great-cell");
  } else if (item.clicked) {
    classNames.push("cell-white");
  }

  return <div className={classNames.join(" ")} onClick={onCellClick}></div>;
};

export default BoardCell;