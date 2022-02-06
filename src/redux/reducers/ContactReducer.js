
let initialState = []


const contactReducer =  (state = initialState, action ) => {
    switch (action.type) {
        case 'FILL_USER_DATA':
            state = [...state, ...action.payload];
            return state;

        case "ADD_USER":
            state = [...state, action.payload] ;
            return state;
        case "UPDATE_USER":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);

            state = updateState ;
            return state;
        case "DELETE_USER":
            const deleteState = state.filter(contact => contact.id !== action.payload);
            state = deleteState;
            return state;

        default:
             return state;
    }
};

export default contactReducer