import {useState} from 'react'
import addOneContact from '../services/addOneContact'

function AddContact({history}) {
    const [contact, setContact] = useState({name:"" , phone:""})
    const changeHandler=(e)=>{
        setContact({...contact ,[e.target.name]:e.target.value})
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        try {
            await addOneContact(contact)
      
          } catch (error) {
      
          }
        
        history.push("/")

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
                <button type="submit">+</button>
            </form>
            
        </section>
    )
}

export default AddContact
