import React from 'react'
import userIcon from '../../src/assets/userIcon.png'

function ContactList({contacts}) {
    return (
        <section className="ContactList">
            {contacts.map(contact=>{
                return(
                    <div className="Contact">
                        <div>
                            <img src={userIcon}/>
                            {contact.name}
                        </div>
                        <div>
                            {contact.phone}
                        </div>
                        <button>x</button>
                    </div>
                )
            })}
        </section>
    )
}

export default ContactList
{}