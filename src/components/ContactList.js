import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import deleteOneContact from '../services/deleteOneContact';
import getAllContacts from '../services/getAllContacts';
import Contact from './Contact'

function ContactList({props}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            const { data } = await getAllContacts();
            setContacts(data)
        }
        try {
            getContacts();

        } catch (error) {

        }

    }, [])

    const deleteContact = async (id) => {

        await deleteOneContact(id)
        const filter = contacts.filter(c => c.id !== id);
        setContacts(filter)
    
      }
    return (
        <section className="ContactList">
            <button> <Link to="/add">Add new Contact</Link> </button>
            {contacts.map(contact => {
                return (
                    <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
                )
            })}
        </section>
    )
}

export default ContactList
{ }