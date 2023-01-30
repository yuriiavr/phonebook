import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import contactsOperations from 'redux/contacts/phone-operations';
import ShowModal from 'components/Modal/Modal';
import css from '../ContactList/ContactList.module.css';

const getVisibleEl = (contacts = [], filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const [show, setShow] = useState(false);
  const [editableItem, setEditableItem] = useState();
  const handleShow = id => {
    setShow(true);
    const getItemForEdit = contactArray.find(e => e.id === id);
    setEditableItem(getItemForEdit);
  };

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const contactArray = useSelector(state =>
    getVisibleEl(state.contacts.contacts, state.contacts.filter)
  );

  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ListGroup className={css.contact__list}>
        {contactArray.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              deleteEl={deleteContact}
              editEl={handleShow}
              className={css.contact__list__item}
            />
          );
        })}
      </ListGroup>
      <div>
        {show && (
          <ShowModal
            show={show}
            handleClose={handleClose}
            editableItem={editableItem}
          />
        )}
      </div>
    </div>
  );
}

ContactList.propTypes = {
  contactArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};