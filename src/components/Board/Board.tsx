import React from 'react';
import BoardCell from './BoardCell';
import { itemsProps } from '../../types';

interface Props {items: itemsProps[]}

const Board: React.FC<Props> = ({items}) => {
  return (
    <div className='board'>
      {items.map((item) => (
        <BoardCell key={item.id}/>
      ))}
    </div>
  );
};

export default Board;