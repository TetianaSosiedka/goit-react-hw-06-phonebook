import { useSelector, useDispatch } from 'react-redux';

import { Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Input
      onChange={handleChangeFilter}
      type="text"
      name="filter"
      value={value}
      placeholder="Filter"
    ></Input>
  );
};

export default Filter;
