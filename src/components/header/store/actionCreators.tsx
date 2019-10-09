import { Dispatch } from 'redux'
import * as constants from './constants'
import axios from 'axios'

import {
  IBaseAction,
  IHeaderListAction,
  IHeaderListChangePageAction
} from '../../../types'

// action interface

export const searchFocus = (): IBaseAction => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = (): IBaseAction => ({
  type: constants.SEARCH_BLUR
})

export const mouseEnter = (): IBaseAction => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = (): IBaseAction => ({
  type: constants.MOUSE_LEAVE
})

export const getList = (dispatch: Dispatch) => {
  axios
    .get('/api/headerList')
    .then(({ data: res }) => {
      if (res.code === 0) {
        dispatch(changeList(res.data))
      } else {
        console.log(res.message)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const changeList = (data: Array<string>): IHeaderListAction => ({
  type: constants.CHANGE_HEADER_LIST,
  data,
  totalPage: Math.ceil(data.length / 10)
})

export const changePage = (page: number): IHeaderListChangePageAction => ({
  type: constants.CHANGE_PAGE,
  page
})
