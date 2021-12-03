import { useState, useEffect } from "react";
import ContactsList from "../../components/contacts/contacts-list";
import ContactAPI from "../../config/contact.api";
import IContact from "../../interfaces/i-contact";

const ContactsIndex = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [updated, setUpdate] = useState(0);
  const deleteContact = async (id: string): Promise<any> => {
    await ContactAPI.delete(`/${id}`);
    setUpdate(updated + 1);
  };

  const fetchContacts = async () => {
    const contacts = await ContactAPI.get<IContact[]>("");
    return contacts.data;
  };

  useEffect(() => {
    (async () => {
      const contacts = await fetchContacts();
      setContacts(contacts);
    })();
  }, [updated]);

  return (
    <>
      <h1>Liste de contacts</h1>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default ContactsIndex;
