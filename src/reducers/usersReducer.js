export default (state= [] ,action) => {
    switch(action.type){
        case "FETCH_USER":
            return [...state,action.payload];
        case "FETCH_USERS":
                return action.payload;
        default:
            return state;
    }
}