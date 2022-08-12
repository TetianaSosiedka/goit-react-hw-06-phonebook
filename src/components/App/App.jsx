import { useSelector } from 'react-redux';

import { Container } from './App.styled';

import NewContactForm from '../Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactsList';

export const App = () => {
  const items = useSelector(state => state.contacts.items);

  return (
    <Container>
      <h2>Phonebook</h2>
      <NewContactForm />

      <h2>Contacts</h2>
      {items.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You have no contacts</p>
      )}
    </Container>
  );
};
