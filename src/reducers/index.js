import { combineReducers} from 'redux'
import loginreducer from './loginreducer'
import postsReducers from './postsReducers'
import usersReducer from './usersReducer'


export default combineReducers({
    posts:postsReducers,
    users:usersReducer,
    loggedin : loginreducer

})