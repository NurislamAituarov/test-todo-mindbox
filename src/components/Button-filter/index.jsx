import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterItem } from '../../Redux/action';

export function ButtonFilter({ el, onClick, i }) {
  const dispatch = useDispatch();

  function onFilter() {
    dispatch(filterItem(el.title));
  }

  return (
    <Button
      onClick={() => {
        onClick(i);
        onFilter();
      }}
      sx={{ color: '#808080' }}
      color="secondary"
      variant={el.completed}>
      {el.title}
    </Button>
  );
}
