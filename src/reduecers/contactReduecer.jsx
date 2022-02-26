const initialState ={

    contacts :[
        {
            id:1,
            email:"email"
        },
        {
            id:2,
            email:"email"
        },
        {
            id:3,
            email:"email"
        }
    ]
};

export default((state = initialState , action)=>{
    switch (action.type) {
        case "GET_CONTACTS":
            return {
                ...state
            }
        case "DELET_CONTACTS":
        return {
            ...state,
            contacts : state.contacts.filter(contact => contact.id != action.paylod)
        }
        case "ADD_CONTACTS":
        return {
            ...state,
            contacts : [action.paylod , ...state.contacts]
        }
        default:{
            return state
        }
    }
})
