import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { StyledBtn, StyledForm, StyledField } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }

    resetForm();
  };

  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <>
          <label htmlFor="name">Name:</label>
          <StyledField
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </>
        <>
          <label htmlFor="number">Number:</label>
          <StyledField type="tel" id="number" name="number" required />
        </>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
