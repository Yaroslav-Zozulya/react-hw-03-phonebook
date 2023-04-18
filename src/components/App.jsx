import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  checkContacts = name =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

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

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm values={this.state} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleSearchInput={this.handleSearchInput} />
        <ContactsList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
