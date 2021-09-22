import { Link } from 'react-router-dom'
import userIcon from '../../src/assets/userIcon.png'


function Contact({ onDelete, contact }) {
    return (

        <div className="Contact" key={contact.id}>
            <Link to={{ pathname: `user/${contact.id}`, state: { contact: contact } }}>
                <div>
                    <img src={userIcon} />
                    {contact.name}
                </div>
                <div>
                    {contact.phone}
                </div>
            </Link>
            <div style={{display:'flex' }}>
                <button onClick={() => onDelete(contact.id)}>x</button>
                <Link to={`/edit/${contact.id}`} >
                    <button>edit</button>
                </Link>
            </div>

        </div>

    )
}

export default Contact
