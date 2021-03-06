import { useState, useEffect } from 'react'
import getOneContact from '../services/getOneContact'
import putOneContact from '../services/putOneContact'

function EditContact({ editContact, history, match }) {

    const [contact, setContact] = useState({ name: "", phone: "" })

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const fetchId = async () => {
            const { data } = await getOneContact(match.params.id)
            setContact({ name: data.name, phone: data.phone })
        }
        try {
            fetchId()
        } catch (error) {

        }
     }, [])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await putOneContact(match.params.id, contact)

        } catch (error) {

        }

        history.push('/')
    }



    return (
        <section className="AddContact">
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input value={contact.name} onChange={changeHandler} name="name"></input>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input value={contact.phone} onChange={changeHandler} name="phone"></input>
                </div>
                <button type="submit">edit</button>
            </form>

        </section>
    )
}


export default EditContact
