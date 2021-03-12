import react from 'react'
import reactdom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import App from './components/App'
import reducers from './reducers'

reactdom.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    document.querySelector("#root")

)