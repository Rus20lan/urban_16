import style from './addBlock.module.css';
import pen from '../../images/icons/pen.svg';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../../redux/actions';
import { taskAdd } from '../../redux/tasksSlice';

function AddBlock() {
  const [newTask, setNewTask] = useState({ task: '', isCompleted: false });
  const dispatch = useDispatch();

  const handleClick = (newTask) => {
    if (newTask.task) {
      // dispatch(todoAdded(newTask));
      dispatch(taskAdd(newTask));
      setNewTask({ task: '', isCompleted: false });
    }
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.container}>
      <div className={style.formWrapper}>
        <input
          className={style.formInput}
          name="task"
          placeholder={'new task'}
          onChange={(e) => handleChange(e)}
          value={newTask.task}
        />
        <button className={style.formBtn} onClick={() => handleClick(newTask)}>
          <img src={pen} alt="pen"></img>
        </button>
      </div>
    </div>
  );
}

export default AddBlock;
