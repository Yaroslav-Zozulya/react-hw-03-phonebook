import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import { contactsSchema } from 'validation';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    const { addContact } = this.props;
    return (
      <Formik
        initialValues={this.state}
        validationSchema={contactsSchema}
        onSubmit={addContact}
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
    );
  }
}

export default ContactForm;
