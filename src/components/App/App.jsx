import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './App.styled';

import NewContactForm from '../Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactsList';

export const App = () => {
  // const [items, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contakts-key')) ?? [];
  // });

  const items = useSelector(state => state.contacts.items);

  useEffect(() => {
    localStorage.setItem('contakts-key', JSON.stringify(items));
  }, [items]);

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
