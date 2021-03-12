import PlaceHolder from '../Apis/Placeholder'

export const signin = (email)=>{
    return{
        type:'SIGN_IN',
        payload:email
    }
}

export const signout = ()=>{
    return{
        type:'SIGN_OUT',
        
    }
}

export const fetchUsers = ()=> async dispatch=>{
    const response = await PlaceHolder.get("/users")
    
    dispatch({type:'FETCH_USERS',payload:response.data});

}





export const fetchposts = () => async dispatch =>{
    const response = await PlaceHolder.get('./posts')


    dispatch(
        {
            type: 'FETCH_POSTS',
            payload:response.data
        }
    )
}

export const fetchUser = (id) => async dispatch =>{
    const response = await PlaceHolder.get('/users/'+id)


    dispatch(
        {
            type: 'FETCH_USER',
            payload:response.data
        }
    )
}

export const fetchPost = (id) => async dispatch =>{
    const response = await PlaceHolder.get('/posts/'+id)

    
    dispatch(
        {
            type: 'FETCH_POST',
            payload:response.data
        }
    )
}