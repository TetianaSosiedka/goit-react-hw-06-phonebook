import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form } from './Filter.styled';

import useGetContact from '../../hooks/useGetContact';

import Button from '@mui/material/Button';

import { addItems } from 'redux/contactsSlice';
//-----------------------------------------------------

const NewContactForm = () => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.contacts.items);

  const { name, number, setState } = useGetContact();

  const idInputName = nanoid();
  const idInputNumber = nanoid();

  const handeInputChange = event => {
    setState(event.target.name, event.target.value);
  };

  const addDateForm = contact => {
    const incontacts = items.find(item => item.name === contact.name);
    if (incontacts) {
      Notiflix.Report.warning(
        'Warning',
        `${contact.name} is alredy incontacts`,
        'Cancel',
        function cb() {
          // callback
        }
      );
      return;
    }
    Notiflix.Report.success('Success', 'Contact added', 'Ok', function cb() {
      // callback
    });

    dispatch(addItems(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();

    addDateForm({ name, number, id });

    setState();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={idInputName}>
        <span>Name</span>
        <input
          id={idInputName}
          onChange={handeInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label htmlFor={idInputNumber}>
        <span>Number</span>
        <input
          id={idInputNumber}
          onChange={handeInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <Button variant="contained" size="small" type="submit">
        {' '}
        Add contact
      </Button>
    </Form>
  );
};

export default NewContactForm;
