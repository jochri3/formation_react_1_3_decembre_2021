import IContact from "../../../interfaces/i-contact";
import ContactItem from "../contact-item";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsList = ({ contacts, deleteContact }: ContactsListProps) => {
  return (
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
        <ContactItem deleteContact={deleteContact} contacts={contacts} />
      </tbody>
    </table>
  );
};

export default ContactsList;
