import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/action';

import './Input-create.scss';

export function InputCreate({ handleClick }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function onCreate(e) {
    e.preventDefault();
    handleClick('panel1');
    if (value) {
      const item = {
        title: value,
        active: true,
        id: new Date().getTime(),
      };
      dispatch(addItem(item));
      setValue('');
    }
  }

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={onCreate} className="input-wrapper">
      <input type="text" placeholder="What needs to be done?" value={value} onChange={onChange} />
    </form>
  );
}
