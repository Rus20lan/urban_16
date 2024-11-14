import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './filterBlock.module.css';
import {
  ActionType,
  // showAll,
  // showCompleted,
  // showUnfulfilled,
} from '../../redux/actions';
import { showAll, showCompleted, showUnfulfilled } from '../../redux/showSlice';

const FilterBlock = () => {
  const [value, setValue] = useState(ActionType.SHOW_ALL);
  const dispatch = useDispatch();

  function chengeValue(event) {
    const result = event.target.value;
    setValue(result);

    if (result && result === ActionType.SHOW_ALL) {
      dispatch(showAll());
    } else if (result && result === ActionType.SHOW_COMPLETED) {
      dispatch(showCompleted());
    } else {
      dispatch(showUnfulfilled());
    }
  }

  return (
    <div className={style.container}>
      <div className={style.radioWrapper}>
        <h3 className={style.nameFilter}>Status filter</h3>
        <div className={style.radioBlock}>
          <label>
            <input
              type="radio"
              name="radio"
              value={ActionType.SHOW_ALL}
              checked={value === ActionType.SHOW_ALL ? true : false}
              onChange={chengeValue}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value={ActionType.SHOW_COMPLETED}
              checked={value === ActionType.SHOW_COMPLETED ? true : false}
              onChange={chengeValue}
            />
            Completed
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value={ActionType.SHOW_UNFULFILLED}
              checked={value === ActionType.SHOW_UNFULFILLED ? true : false}
              onChange={chengeValue}
            />
            Unfulfilled
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
