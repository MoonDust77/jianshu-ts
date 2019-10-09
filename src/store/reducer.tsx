// import { combineReducers } from 'redux-immutable'
import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../components/header/store'

export default combineReducers({
  headerReducer
})
