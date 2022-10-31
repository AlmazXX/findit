import React from 'react';
import './Board.css';

const BoardCell = () => {
  const classNames = ['cell'];

  return (
    <div className={classNames.join(' ')}>
    </div>
  );
};

export default BoardCell;