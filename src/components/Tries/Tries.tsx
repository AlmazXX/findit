import React from "react";
import { itemsProps } from "../../types";

interface Props {
  items: itemsProps[];
  counter: number;
}

const Tries: React.FC<Props> = ({ counter, items }) => {
  return <p style={items.length ? {display: 'block'} : {display: 'none'}}>Tries: {counter}</p>;
};

export default Tries;