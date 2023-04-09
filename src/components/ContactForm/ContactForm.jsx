import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactsSchema } from 'validation';
const ContactForm = ({ values, addContact }) => {
  return (
    <Formik
      initialValues={values}
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
};

export default ContactForm;
