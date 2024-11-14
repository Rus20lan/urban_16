import TasksList from '../TasksList/TasksList';
import style from './main.module.css';
import FilterBlock from '../FilterBlock/FilterBlock';

import React from 'react';

function Main() {
  return (
    <div className={style.container}>
      <FilterBlock />
      <TasksList />
    </div>
  );
}

export default Main;
