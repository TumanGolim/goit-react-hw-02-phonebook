import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
    };
    setContacts([...contacts, newContact]);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
