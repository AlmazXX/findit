import React from "react";
import { itemsProps } from "../../../types";

interface Props {
  resetGame: React.MouseEventHandler;
  items: itemsProps[];
}

const ResetBtn: React.FC<Props> = ({ resetGame, items }) => {
  const classNames = ["btn", "btn-none"];

  if (items.length) {
    classNames.pop();
  }

  return (
    <button className={classNames.join(" ")} onClick={resetGame}>
      Restart
    </button>
  );
};

export default ResetBtn;