import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions/index'

 class ListofUsers extends Component {
     componentDidMount(){
         this.props.fetchUsers()
     }

     renderList(){
        return (this.props.users.map(user=>{
            return(<div className='ui segment' key={user.id}><h4>Name : {user.name}</h4></div>)
        }))

     }
    render() {
        
        
        return (
            <div>
                
               {this.renderList()}
            </div>
        )
    }
}

const mapstatetoprops=state=>{
    
    return {users:state.users}
}


export default connect(mapstatetoprops,{fetchUsers})(ListofUsers)