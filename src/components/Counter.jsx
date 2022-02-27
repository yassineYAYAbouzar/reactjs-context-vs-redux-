import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, deletContact, getContacts } from '../actions/contactAction';
const Counter = () => {
   const initialValues = {
      id: 0,
      email: "",
};

   const [values, setValues] = useState(initialValues)
   
   const dispatch = useDispatch()
   const contacts = useSelector((state) => state.mycontact.contacts)
   useEffect(()=>{
      dispatch(getContacts())
      console.log(contacts)
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
      dispatch(addContact(values))
      console.log(values)
      console.log(contacts)
   }
   const deleteItem = (id) =>{
      console.log(id)
      dispatch(deletContact(id))
   }
   return(
      <div>
        
         {
            contacts.map((item,i) => <li onClick={() =>deleteItem(i)} key={i}>{item.email}</li>)
         }
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



export default Counter;