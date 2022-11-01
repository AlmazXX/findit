import React from "react";
import { itemsProps } from "../../../types";
import '../Btn.css'

interface Props {
  items: itemsProps[];
  onClickHandler: () => void;
}
const StartBtn: React.FC<Props> = ({ items, onClickHandler}) => {
  const classNames = ["btn"];

  if (items.length) {
    classNames.push("btn-none");
  }

  return (
    <button className={classNames.join(" ")} onClick={onClickHandler}>
      Start the Game
    </button>
  );
};

export default StartBtn;
