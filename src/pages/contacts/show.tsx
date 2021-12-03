import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactAPI from "../../config/contact.api";
import IContact from "../../interfaces/i-contact";

interface IParam {
  id: string;
}

/**
 * Christian Lisangola
 * Jardinier Fullstack
 * christian.lisangola@gmail.com
 *
 */

const Show = () => {
  const [contact, setContact] = useState<IContact>();
  const { id } = useParams<IParam>();

  async function fetchContactById(id: string) {
    let contact: IContact = {} as IContact;
    try {
      const response = await ContactAPI.get<IContact>(`/${id}`);
      contact = response.data;
    } catch (error) {
      console.error(error);
    }
    return contact;
  }

  useEffect(() => {
    (async () => {
      const contact = await fetchContactById(id).then((data) => data);
      setContact(contact);
    })();
  }, []);
  return (
    <>
      <h1>Détails de contact</h1>
      {contact && (
        <>
          <pre>
            <code>{JSON.stringify(contact)}</code>
          </pre>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <h3>{contact.position}</h3>
          <p>
            Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Téléphone :{" "}
            <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
          </p>
          <p>Adresse : {contact.work_address}</p>
        </>
      )}
    </>
  );
};

export default Show;
