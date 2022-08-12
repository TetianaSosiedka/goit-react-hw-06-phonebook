import { useSelector } from 'react-redux';

import { List } from './ContactsList.styled';

import ContactsItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const items = useSelector(state => state.contacts.items);

  const handleVisiblyContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();
    const visiblyContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visiblyContacts;
  };

  return (
    <List>
      {handleVisiblyContacts().map(item => (
        <ContactsItem key={item.id} contactDetales={item} />
      ))}
    </List>
  );
};

export default ContactList;
