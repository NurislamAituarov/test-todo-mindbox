import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItem } from '../../Redux/action';
import { ButtonFilter } from '../Button-filter';
import { ListItem } from '../List-item';
import './Main.scss';
import { CustomizedAccordions } from '../CustomizedAccordions';

const arrFilter = [
  { title: 'All', completed: 'outlined' },
  { title: 'Active', completed: 'text' },
  { title: 'Completed', completed: 'text' },
];

export function Main() {
  const { listItems, filter } = useSelector((state) => state.reducer);
  const [state, setState] = useState(arrFilter);
  const dispatch = useDispatch();

  function onClick(index) {
    const newArr = state.map((el, i) => {
      if (index === i) {
        return { ...el, completed: 'outlined' };
      }
      return { ...el, completed: 'text' };
    });
    setState(newArr);
  }

  function filterItems() {
    switch (filter) {
      case 'Active':
        return listItems.filter((item) => {
          return item.active === true;
        });
      case 'Completed':
        return listItems.filter((item) => {
          return item.active === false;
        });
      default:
        return listItems;
    }
  }

  function onDelete() {
    dispatch(deleteItem());
  }

  function createListItem() {
    return filterItems().map((el, i) => {
      return <ListItem key={i} el={el} />;
    });
  }

  return (
    <div className="main">
      <CustomizedAccordions arr={createListItem()} />

      <div className="sort-wrapper">
        {listItems.length ? (
          <Typography style={{ color: 'grey' }} variant="h5" gutterBottom>
            {listItems.filter((el) => el.active === true).length} items left
          </Typography>
        ) : (
          <Typography style={{ color: 'grey' }} variant="h5" gutterBottom>
            Create a to-do list
          </Typography>
        )}
        <div>
          {state.map((el, i) => {
            return <ButtonFilter key={i} el={el} onClick={onClick} i={i} />;
          })}
        </div>
        <Button
          onClick={onDelete}
          variant="text"
          color="error"
          disabled={!listItems.filter((el) => !el.active).length}>
          Clear completed
        </Button>
      </div>
    </div>
  );
}
