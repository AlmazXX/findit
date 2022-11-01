import React, { useState } from "react";
import Board from "../../components/Board/Board";
import ResetBtn from "../../components/Btns/ResetBtn/ResetBtn";
import StartBtn from "../../components/Btns/StartBtn/StartBtn";
import Tries from "../../components/Tries/Tries";
import { itemsProps } from "../../types";
import "./App.css";

function App() {
  const [items, setItems] = useState<itemsProps[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);

  const randFrom = (number: number) => {
    return Math.floor(Math.random() * number);
  };

  const createItems = (itemsCount: number) => {
    const result = [...items];
    let id = 0;
    for (let i = 0; i < itemsCount; ++i) {
      result[i] = { hasItem: false, clicked: false, id: ++id };
    }
    const luckyNum = randFrom(result.length);
    result[luckyNum].hasItem = true;
    setItems(result);
  };

  const openCell = (id: number) => {
    const index = items.findIndex((i) => i.id === id);
    const itemsCopy = [...items];
    const itemCopy = { ...items[index] };
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;
    if (itemCopy.hasItem) {
      setGameOver(true);
    }
    setItems(itemsCopy);
    let counterCopy = counter;
    ++counterCopy;
    setCounter(counterCopy);
  };

  const resetGame = () => {
    createItems(36);
    setCounter(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <StartBtn items={items} onClickHandler={() => createItems(36)} />
      <Board items={items} openCell={openCell} gameOver={gameOver} />
      <Tries counter={counter} items={items} />
      <ResetBtn resetGame={resetGame} items={items} />
    </div>
  );
}

export default App;