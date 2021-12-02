import { useState, useEffect } from "react";
import IContact from "../interfaces/i-contact";

import axios from "axios";
import ContactsList from "./contacts-list";

const App = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const deleteContact = (id: string): void => {
    const newState = [...contacts];
    const index = newState.findIndex(({ id: ID }) => ID === id);
    newState.splice(index, 1);
    setContacts(newState);
  };

  const fetchContacts = async () => {
    const contacts = await axios.get<IContact[]>(
      "http://localhost:5000/contacts"
    );
    return contacts.data;
  };

  useEffect(() => {
    (async () => {
      const contacts = await fetchContacts();
      setContacts(contacts);
    })();
  }, []);

  return (
    <>
      <h1>Liste de contacts</h1>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
