import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => (
  <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
    <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        phone: Yup.string()
          .matches(/^[0-9]+$/, 'Phone number must be digits only')
          .min(10, 'Must be at least 10 digits')
          .required('Required'),
        message: Yup.string()
          .max(500, 'Must be 500 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Field
            name="name"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-2" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Field
            name="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <Field
            name="phone"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-2" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Field
            name="message"
            as="textarea"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
          <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-2" />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </Form>
    </Formik>
  </div>
);

export default ContactForm;

