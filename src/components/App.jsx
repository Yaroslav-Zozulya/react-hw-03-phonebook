import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import { contactsSchema } from 'validation';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = (values, actions) => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: values.name, number: values.number },
        ],
      };
    });
    actions.resetForm();
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Formik
          initialValues={this.state}
          validationSchema={contactsSchema}
          onSubmit={this.addContact}
        >
          <Form>
            <label>
              <span>Name</span>
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </label>
            <label>
              <span>Number</span>
              <Field type="tel" name="number" />
              <ErrorMessage name="number" />
            </label>
            <button type="submit">Add contacts</button>
          </Form>
        </Formik>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
