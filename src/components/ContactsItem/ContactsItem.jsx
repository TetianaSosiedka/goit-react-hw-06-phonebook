import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import { Li } from './ContactsItem.styled';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { removeItems } from 'redux/contactsSlice';

const ContactsItem = ({ contactDetales }) => {
  const dispatch = useDispatch();

  const hendleDeleteContact = event => {
    dispatch(removeItems(event.target.id));

    Notiflix.Report.success('Success', 'Contact deleted', 'Ok', function cb() {
      // callback
    });
  };

  return (
    <Li>
      <Avatar
        sx={{
          width: [25],
          height: [25],
        }}
        src="/broken-image.jpg"
      />
      {contactDetales.name}: {contactDetales.number}
      <Button
        variant="outlined"
        size="small"
        type="button"
        id={contactDetales.id}
        onClick={hendleDeleteContact}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </Li>
  );
};

ContactsItem.propTypes = {
  contactDetales: PropTypes.object,
};

export default ContactsItem;
