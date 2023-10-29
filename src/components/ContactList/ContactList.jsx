import { useDispatch, useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledBtn } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <span className="name">{name}</span>
            <span className="number">{number}</span>
            <StyledBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </StyledBtn>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
