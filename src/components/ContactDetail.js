import React from 'react'
import { Link } from 'react-router-dom';

function ContactDetail(props) {
    const contact=props.location.state.contact;
    console.log(contact)
    return (
        <div>
            <p>name:{contact.name}</p>
            <p>phone {contact.phone} </p>
            <Link to="/" >back to Home</Link>
        </div>
    )
}

export default ContactDetail
