import react from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchposts} from "../actions"
import UserHeader from './UserHeader';

 
class PostList extends react.Component
{
    constructor(props){
        super(props)
        this.state={selected:100}
    }

     componentDidMount()
     {
         this.props.fetchposts()
     }   

     renderList(option)
     {
         if(this.props.posts){

            
            if(Number(this.state.selected)===100){
                            console.log("i am here 1")
                            return this.props.posts.map(post=>{
                                return(
                                    <div className='ui segment' key={post.id}>
                                        <i className='large middle aligned icon user'/>
                                        <Link to={`/blogs/${post.id}`} >
                                        <div className='content'>
                                            <div className='description'>
                                                <h2>{post.title}</h2>
                                                <p>{post.body}</p>
                                            </div>
                                            <UserHeader userId={post.userId}/>
                                        </div>
                                        </Link>

                                    </div>
                                )
                            }) 
                }
                else{
                    return this.props.posts.map(post=>{
                        console.log(option,Number(post.userId))
                        if(Number(option)===Number(post.userId)){
                        return(
                            <div className='ui segment' key={post.id}>
                                <i className='large middle aligned icon user'/>
                                <Link to={`/blogs/${post.id}`} >
                                <div className='content'>
                                    <div className='description'>
                                        <h2>{post.title}</h2>
                                        <p>{post.body}</p>
                                    </div>
                                    <UserHeader userId={post.userId}/>
                                </div>
                                </Link>

                            </div>
                        )
                    }}) 

                }
        }
        else{

            return (<div>Loading</div>)
        }

     }
     // well i could have just mapped over users values for dropdown
    render()
    {
        
        return(
            
        <div> 
            <div className='ui segment'>
                <select onClick={(e)=>this.setState({selected:e.target.value})}>
                    <option value={100}>none</option>                 
                    <option value={1}>Leanne Graham</option>
                    <option value={2}>Ervin Howell</option>
                    <option value={3}>Clementine Bauch</option>
                    <option value={4}>Patricia Lebsack</option>
                    <option value={5}>Chelsey Dietrich</option>
                    <option value={6}>Mrs. Dennis Schulist</option>
                    
                    <option value={7}>Kurtis Weissnat</option>
                    <option value={8}>Nicholas Runolfsdottir V</option>
                    <option value={9}>Glenna Reichert</option>
                    <option value={10}>Clementina DuBuque</option>
                </select>
            </div>
            
            <div className='ui relaxed divided list'>{this.renderList(this.state.selected)}</div>
            
        </div>
        );
    }
}


const mapStateToProps =(state) =>{
    return { posts : state.posts.data}
}



export default connect(mapStateToProps,{fetchposts:fetchposts})(PostList)