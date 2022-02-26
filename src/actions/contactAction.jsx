export const getContacts = () =>{
    return {
        type: "GET_CONTACTS"
     }
}
export const deletContact = (id) =>{
    return {
        type: "DELET_CONTACTS",
        paylod:id
     }
}
export const addContact = (contact) =>{
    return {
        type: "ADD_CONTACTS",
        paylod:contact
     }
}