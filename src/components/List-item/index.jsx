import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useDispatch } from 'react-redux';

import { selectItem } from '../../Redux/action';
import './List-item.scss';

export function ListItem({ el }) {
  const dispatch = useDispatch();

  function onChange() {
    dispatch(selectItem(el.id));
  }

  return (
    <div className="list-item__wrapper">
      <FormGroup>
        <FormControlLabel
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28, width: '100%' } }}
          control={<Checkbox onChange={onChange} checked={!el.active} color="success" />}
          label={<LabelTitle title={el.title} checked={el.active} />}
        />
      </FormGroup>
    </div>
  );
}

function LabelTitle({ title, checked }) {
  return (
    <>
      {checked ? (
        <p className="label">{title}</p>
      ) : (
        <strike className="label strike">{title}</strike>
      )}
    </>
  );
}
