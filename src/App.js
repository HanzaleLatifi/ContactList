import './App.css';
import {useState , useEffect} from 'react'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addNewContact=(contact)=>{
      const newObj={...contact ,id:Math.floor(Math.random()*6000)}
      setContacts([...contacts , newObj])
  }
  const deleteContact=(id)=>{
    console.log(id)
    const filter=contacts.filter(c=>c.id!==id);
    setContacts(filter)
  }
  useEffect(() => {
    const saved=JSON.parse(localStorage.getItem("contacts")) ;
    if(saved) setContacts(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem("contacts" , JSON.stringify(contacts));
    
  }, [contacts])
  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
