import userIcon from '../../src/assets/userIcon.png'


function Contact({ onDelete, contact }) {
    return (

        <div className="Contact" key={contact.id}>
            <div>
                <img src={userIcon} />
                {contact.name}
            </div>
            <div>
                {contact.phone}
            </div>
            <button onClick={() => onDelete(contact.id)}>x</button>
        </div>

    )
}

export default Contact
