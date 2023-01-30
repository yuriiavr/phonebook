import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from './phone-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = contacts => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(editContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const editContact =
  ({ id, name, number }) =>
  dispatch => {
    const contact = { name, number };
    dispatch(deleteContactRequest());

    axios
      .patch(`/contacts/${id}`, contact)
      .then(({ data }) => dispatch(editContactSuccess(data)))
      .catch(error => dispatch(editContactError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
};
export default contactsOperations;