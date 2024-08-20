import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'; // Ensure this file contains the updated CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.mobile) errors.mobile = 'Mobile number is required';
    if (!formData.message) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs.sendForm('service_sqtezms', 'template_pk1yfek', e.target, 'o1C2VGNdHIqdzMjvc')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setFormErrors({});
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
        <input
          type="text"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        {formErrors.mobile && <p style={{ color: 'red' }}>{formErrors.mobile}</p>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
