import ListofUsers from "./ListofUsers";
import NavBar from "./NavBar";
import {BrowserRouter,Route} from 'react-router-dom'

import PostList from "./PostList";
import BlogComponent from "./BlogComponent";
import Login from "./Login";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <Route path='/' exact component={ListofUsers}/>
      <Route path='/users' exact component={ListofUsers}/>
      <Route path='/blogs' exact component={PostList}/>
      <Route path='/blogs/:id' exact component={BlogComponent}/>
      <Route path='/login' exact component={Login} />

      
      
      </BrowserRouter>
      
      
      
      
      
      
    </div>
  );
}

export default App;


    
    
