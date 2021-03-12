import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPost} from '../actions/index'

 class BlogComponent extends Component {

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)
    }
    render(){
        console.log(this.props.blog)
        return (
            <div className='ui segment'>
                <h2>{this.props.blog.title}</h2>
                <p>{this.props.blog.body}</p>
            </div>
        )
    }
}
 

const mapstatetoprops=(state,ownProps)=>{
    return {blog:state.posts}
}


export default connect(mapstatetoprops,{fetchPost})(BlogComponent)