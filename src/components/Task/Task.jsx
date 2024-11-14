import React, { useState } from 'react';
import style from './task.module.css';
import del from '../../images/icons/delete.svg';
import { useDispatch } from 'react-redux';
// import { todoDeleted, todoIsComplete } from '../../redux/actions';
import { taskDelete, taskIsComplete } from '../../redux/tasksSlice';

function Task(props) {
  const { task, isCompleted, index } = props;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    // dispatch(todoDeleted(index));
    dispatch(taskDelete(index));
  };

  const handleChange = (index) => {
    // dispatch(todoIsComplete(index));
    dispatch(taskIsComplete(index));
  };

  return (
    <li className={style.task}>
      {isCompleted ? (
        <span className={`${style.textTask} ${style.markDone}`}>
          <del>{task}</del>
        </span>
      ) : (
        <span className={style.textTask}>{task}</span>
      )}

      <div className={style.controlWrapper}>
        <label className={style.controlLabel}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleChange(index)}
          ></input>
        </label>

        <button className={style.btn} onClick={() => handleClick(index)}>
          <img src={del} alt="del"></img>
        </button>
      </div>
    </li>
  );
}

export default Task;
