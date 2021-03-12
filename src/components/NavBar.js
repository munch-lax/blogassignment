import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {signin,signout} from '../actions/index'

 class NavBar extends Component {

    componentDidMount(){
        const email = localStorage.getItem('email')
    }
    
    

    logoutHandler=()=>{
        this.props.signout()
        
        
    }
    
    
    render() {
        
        return (
            <div className="ui inverted menu">
  <Link className="active item" to='/'>
    Home
  </Link>
  <Link className="item" to='/blogs'>
    Blog Posts
  </Link>
  <Link className="item" to='/users'>
    Users
  </Link>
  
  <div className="right menu">
    {this.props.loggedin?
    <Link className="ui item" onClick={this.logoutHandler}>
      Logout {this.email}
    </Link>:<Link className="ui item" to='/login'>
      Login
    </Link>}
    
  </div>
  
</div>

        )
    }
}

const mapstatetoprops=state=>{
    return {loggedin:state.loggedin}
}

export default connect(mapstatetoprops,{signin,signout})(NavBar)
