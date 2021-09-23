import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Switch, Route } from 'react-router-dom'
import ContactDetail from './components/ContactDetail';
import EditContact from './components/EditContact';



function App() {
  
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContact}  />
        <Route path="/" exact component={ContactList} />

      </Switch>

    </div>
  );
}

export default App;
