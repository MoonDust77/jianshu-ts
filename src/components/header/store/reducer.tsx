import * as constants from './constants'
import { fromJS } from 'immutable'
import { HeaderStore } from '../../../types/index'

const defaultState: HeaderStore<string, any> = fromJS({
  focused: false
})

export default (
  state = defaultState,
  action: any
): HeaderStore<string, any> => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    default:
      return state
  }
}
