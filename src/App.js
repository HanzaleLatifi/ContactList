import './App.css';
import {useState} from 'react'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addNewContact=(contact)=>{
      const newObj={...contact ,id:Math.floor(Math.random()*6000)}
      setContacts([...contacts , newObj])
  }
  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
