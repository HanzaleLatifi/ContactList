import './App.css';
import { useState, useEffect } from 'react'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Switch, Route } from 'react-router-dom'
import ContactDetail from './components/ContactDetail';
import getAllContacts from './services/getAllContacts';
import deleteOneContact from './services/deleteOneContact';
import addOneContact from './services/addOneContact';
import EditContact from './components/EditContact';
import putOneContact from './services/putOneContact';



function App() {
  const [contacts, setContacts] = useState([]);

  const addNewContact = async (contact) => {
    try {
      const { data } = await addOneContact(contact)
      setContacts([...contacts, data])

    } catch (error) {

    }


  }
  const deleteContact = async (id) => {

    await deleteOneContact(id)
    const filter = contacts.filter(c => c.id !== id);
    setContacts(filter)

  }
  const editContact=async(contact, id )=>{
    await putOneContact(id,contact)
    const {data}=await getAllContacts()
    setContacts(data)
  }
  
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

  return (
    <div className="App">
      <h1>Contact List</h1>
      <Switch>
      <Route path="/edit/:id" render={(props) => <EditContact editContact={editContact} {...props} />} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" render={(props) => <AddContact addNewContact={addNewContact} {...props} />} />
        <Route path="/" exact render={(props) => <ContactList contacts={contacts} deleteContact={deleteContact} />} />

      </Switch>

    </div>
  );
}

export default App;
