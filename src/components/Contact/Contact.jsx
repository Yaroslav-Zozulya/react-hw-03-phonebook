const Contact = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id}>
      <p>{contact.name}</p> <p>{contact.number}</p>
      <button id={contact.id} onClick={deleteContact}>
        delete
      </button>
    </li>
  );
};

export default Contact;
