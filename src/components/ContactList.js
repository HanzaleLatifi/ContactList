import React from 'react'
import userIcon from '../../src/assets/userIcon.png'
import {Link} from 'react-router-dom'

function ContactList({contacts,deleteContact}) {
    return (
        <section className="ContactList">
            <button> <Link to="/add">Add new Contact</Link> </button>
            {contacts.map(contact=>{
                return(
                    <div className="Contact" key={contact.id}>
                        <div>
                            <img src={userIcon}/>
                            {contact.name}
                        </div>
                        <div>
                            {contact.phone}
                        </div>
                        <button onClick={()=>deleteContact(contact.id)}>x</button>
                    </div>
                )
            })}
        </section>
    )
}

export default ContactList
{}