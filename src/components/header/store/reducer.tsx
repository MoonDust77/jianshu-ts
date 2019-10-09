import * as constants from './constants'
// import { copyObject } from '../../../utils/helper'
import { IHeaderStore } from '../../../types/index'

let defaultState: IHeaderStore = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
}

export default (
  state: IHeaderStore = defaultState,
  action: any
): IHeaderStore => {
  // let newState = copyObject(state)
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // newState.focused = true
      return { ...state, focused: true }
    case constants.SEARCH_BLUR:
      // newState.focused = false
      return { ...state, focused: false }
    case constants.MOUSE_ENTER:
      return { ...state, mouseIn: true }
    case constants.MOUSE_LEAVE:
      return { ...state, mouseIn: false }
    case constants.CHANGE_HEADER_LIST:
      return { ...state, list: action.data, totalPage: action.totalPage }
    case constants.CHANGE_PAGE:
      return { ...state, page: action.page }
    default:
      return state
  }
}
