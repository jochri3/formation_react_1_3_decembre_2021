import { useState, useEffect } from "react";
import axios from "axios";

interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  position: string;
  work_address: string;
}

const App = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const deletContact = (id: string): void => {
    const newState = [...contacts];
    const index = newState.findIndex((contact) => contact.id === id);
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
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Position</th>
            <th>Numéro de Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.last_name}</td>
              <td>{contact.first_name}</td>
              <td>{contact.email}</td>
              <td>{contact.position}</td>
              <td>{contact.phone_number}</td>
              <td>
                <button onClick={() => deletContact(contact.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
