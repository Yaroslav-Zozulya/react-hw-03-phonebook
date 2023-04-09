import Contact from 'components/Contact/Contact';

const ContactsList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
