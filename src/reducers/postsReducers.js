export default (state={data:[]},action)=>{
   
    switch(action.type){
        case "FETCH_POST":
            return [action.payload];
        case "FETCH_POSTS":
                return {...state,data:action.payload};
        default:
            return state;
    }

    
    
}