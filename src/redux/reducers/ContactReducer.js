
let initialState = []


const contactReducer =  (state = initialState, action ) => {
    switch (action.type) {
        case 'FILL_USER_DATA':
            // sort by username alphabetically
            return action.payload.sort((a, b) => {
                if (a.username < b.username) {
                    return -1;
                }
                if (a.username > b.username) {
                    return 1;
                }
                return 0;
            });

   

        case "ADD_USER":
            // sort by username alphabetically after adding a new user
            const newData = [...state, action.payload];
            const sortedData = newData.sort((a, b) => {
                if (a.username < b.username) {
                    return -1;
                }
                if (a.username > b.username) {
                    return 1;
                }
                return 0;
            });
            state = sortedData;
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