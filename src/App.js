import './App.css';
import { useState, useEffect } from 'react'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Switch, Route } from 'react-router-dom'
import ContactDetail from './components/ContactDetail';
import getAllContacts from './services/getAllContacts';
import deleteOneContact from './services/deleteOneContact';
import addOneContact from './services/addOneContact';



function App() {
  const [contacts, setContacts] = useState([]);

  const addNewContact = async(contact) => {
    try {
      const newObj = { ...contact, id: Math.floor(Math.random() * 6000) }
      setContacts([...contacts, newObj])
      await addOneContact(contact)
      
    } catch (error) {
      
    }
   

  }
  const deleteContact = async(id) => {

    const filter = contacts.filter(c => c.id !== id);
    setContacts(filter)
    await deleteOneContact(id)
  }
  useEffect(() => {
    const getContacts=async()=>{
        const{data}=await getAllContacts();
        setContacts(data)
    }
    try {
      getContacts();

    } catch (error) {
      
    }
    
  }, [])
  
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" render={(props) => <AddContact addNewContact={addNewContact} {...props} />} />
        <Route path="/" exact render={(props) => <ContactList contacts={contacts} deleteContact={deleteContact} />} />

      </Switch>

    </div>
  );
}

export default App;
