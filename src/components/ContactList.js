import React from 'react'
import {Link} from 'react-router-dom'
import Contact from './Contact'

function ContactList({contacts,deleteContact}) {
    return (
        <section className="ContactList">
            <button> <Link to="/add">Add new Contact</Link> </button>
            {contacts.map(contact=>{
                return(
                   <Contact contact={contact} onDelete={deleteContact} />
                )
            })}
        </section>
    )
}

export default ContactList
{}