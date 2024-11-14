import React from 'react';
import Task from '../Task/Task';
import style from './tasksList.module.css';
import { useSelector } from 'react-redux';
import * as selectors from '../../modules/selectors';
import { ActionType } from '../../redux/actions';

const TasksList = () => {
  // let tasks = useSelector(selectors.getTasks);
  let tasks = useSelector((state) => state.tasks);
  // const show = useSelector(selectors.getShowTasks);
  const show = useSelector((state) => state.show);

  if (show === ActionType.SHOW_COMPLETED) {
    tasks = tasks.filter((task) => task.isCompleted);
  } else if (show === ActionType.SHOW_UNFULFILLED) {
    tasks = tasks.filter((task) => !task.isCompleted);
  }
  // console.log(tasks.length);
  return (
    <ul className={style.container}>
      {tasks.map((item, index) => (
        <Task
          key={index}
          index={index}
          task={item.task}
          isCompleted={item.isCompleted}
        ></Task>
      ))}
    </ul>
  );
};

export default TasksList;
