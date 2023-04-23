import localStorageAPI from './localStorageAPI';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkContacts = name =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

  componentDidMount() {
    this.setState({
      contacts: localStorageAPI.getContacts(),
    });
  }

  componentDidUpdate() {
    localStorageAPI.addContact(this.state.contacts);
  }

  addContact = (values, actions) => {
    const { name, number } = values;
    const { contacts } = this.state;

    const isContact = this.checkContacts(name);
    if (isContact) {
      return alert(`${name} is already in contacts`);
    }

    this.setState({
      contacts: [
        ...contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    });
    actions.resetForm();
  };

  deleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    });
  };

  handleSearchInput = e => {
    this.setState({ filter: e.target.value.toLowerCase().trim() });
  };

  render() {
    const { contacts, filter } = this.state;
    const isContacts = contacts.length !== 0;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm values={this.state} addContact={this.addContact} />
        {isContacts && (
          <>
            <h2>Contacts</h2>
            <Filter handleSearchInput={this.handleSearchInput} />
            <ContactsList
              filteredContacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </>
        )}
      </>
    );
  }
}
