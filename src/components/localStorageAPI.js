const CONTACTS_KEY = 'CONTACTS';

const getContacts = () => {
  try {
    return JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
  } catch (error) {
    console.log(error);
  }
};

const addContact = contacts => {
  try {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

const localStorageAPI = {
  getContacts,
  addContact,
};

export default localStorageAPI;
