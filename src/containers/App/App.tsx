import React, { useState } from "react";
import Board from "../../components/Board/Board";
import { itemsProps } from "../../types";
import "./App.css";

function App() {
  const [items, setItems] = useState<itemsProps[]>([

  ]);

  const randFrom = (number: number) => {
    return Math.floor(Math.random() * number);
  };

  const createItems = (itemsCount: number) => {
    const result = [...items];
    let id = 0;
    for (let i = 0; i < itemsCount; ++i) {
      result.push({ hasItem: false, clicked: false, id: ++id });
    }
    const luckyNum = randFrom(result.length);
    result[luckyNum].hasItem = true;
    return result
  };

  if (!items.length) {
    setItems(createItems(36));
  }

  return (
    <div className="App">
      <Board items={items} />
    </div>
  );
}

export default App;
