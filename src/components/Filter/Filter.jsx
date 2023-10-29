import { useDispatch, useSelector } from 'react-redux';
import { StyledLabel } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>
  );
};
