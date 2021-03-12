import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, signin } from '../actions'

const Login = ({history}) => {
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [allokay,setallokay]=useState(false)
    const[error,seterror]=useState('Please enter values')
    const [userinfo, setuserinfo] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
        
    }, [])

    const users = useSelector(state => state.users)
    console.log(users)

    const submitHandler=(e)=>{
        e.preventDefault()
       setuserinfo( users.find(user=>user.email===email))
        if (userinfo){
            if(userinfo.username===password){
                localStorage.setItem('email',email)
            setallokay(true)
            dispatch(signin(email))
            history.push('/blogs')}
        }
        else{
            setallokay(false)
            seterror("please enter correct details")
            console.log(error)
        }

    }
    return (
        <div className='ui segment'>
            {allokay?<div></div>:<div>{error}</div>}
        <form className="ui form">
  <div className="field">
    <label>Email</label>
    <input type="email" name="email" placeholder="email" onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
  <div className="field">
    <label>Password</label>
    <input type="password" name="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  
  <button className="ui button" type="submit" onClick={submitHandler}>Submit</button>
</form>
</div>

    )
}

export default Login
