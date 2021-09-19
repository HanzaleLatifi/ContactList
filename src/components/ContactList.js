import React from 'react'
import userIcon from '../../src/assets/userIcon.png'

function ContactList({contacts,deleteContact}) {
    return (
        <section className="ContactList">
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