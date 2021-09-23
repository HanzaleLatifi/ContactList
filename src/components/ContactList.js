import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import deleteOneContact from '../services/deleteOneContact';
import getAllContacts from '../services/getAllContacts';
import Contact from './Contact'

function ContactList({props}) {
    const [contacts, setContacts] = useState([]);
    const [allContacts , setAllContacts]=useState([]);
    const [search,setSearch]=useState('')

    useEffect(() => {
        const getContacts = async () => {
            const { data } = await getAllContacts();
            setContacts(data)
            setAllContacts(data)
        }
        try {
            getContacts();

        } catch (error) {

        }

    }, [])
    const searchHandler=(e)=>{
        setSearch(e.target.value);
        if(e.target.value!==''){
            const filter= allContacts.filter(c=>{
                return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase());
            })
            setContacts(filter)
        }else{
            setContacts(allContacts)
        }
        
    }

    const deleteContact = async (id) => {

        await deleteOneContact(id)
        const filter = contacts.filter(c => c.id !== id);
        setContacts(filter)
    
      }
    return (
        <section className="ContactList">
            <button> <Link to="/add">Add new Contact</Link> </button>
            <div className="SearchBar">
                <input type="search" value={search} onChange={searchHandler}></input>
            </div>
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