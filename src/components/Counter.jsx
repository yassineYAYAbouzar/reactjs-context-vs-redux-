import React, { useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getContacts ,deletContact ,addContact} from '../actions/contactAction';
const Counter = ({getContacts,contact,deletContact ,addContact}) => {
   const initialValues = {
      id: 0,
      email: "",
};

   const [values, setValues] = useState(initialValues)
   
   useEffect(()=>{
      getContacts()
      console.log(contact)
   },[])
    const handleInputChange = (e) =>{
      e.preventDefault()
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
   }
   const onSubmit = (e) => {
      e.preventDefault()
      console.log(values)
      addContact(values)
   }
   return(
      <div>
         <h3 >this is counter {contact.map(conta=>{
            return( 
               <div>
                  <p key={conta.id}>{conta.email}</p>
                  <button  onClick={() =>deletContact(conta.id)}>delet</button>
               
               </div>
            )
         })}</h3>
               <form >
                     <input
                        value={values.id}
                        onChange={handleInputChange}
                        name="id"
                        label="id"
                     />
                     <input
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        label="email"
                     />
                     <button onClick={onSubmit}> Submit </button>
                  </form>
      </div>
   )
}
const mapStateToProps = (state) =>{
   return{
      contact : state.mycontact.contacts
   }
}




export default connect(mapStateToProps,{getContacts,deletContact,addContact})(Counter) ;