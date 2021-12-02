import IContact from "../interfaces/i-contact";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactItem = ({ contacts, deleteContact }: ContactsListProps) => {
  return (
    <>
      {contacts.map(
        ({ id, last_name, first_name, email, position, phone_number }) => (
          <tr key={id}>
            <td>{last_name}</td>
            <td>{first_name}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td>{phone_number}</td>
            <td>
              <button onClick={() => deleteContact(id)}>Supprimer</button>
            </td>
          </tr>
        )
      )}
    </>
  );
};

export default ContactItem;
