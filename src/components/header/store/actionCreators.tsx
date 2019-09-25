import { fromJS } from 'immutable'
import * as constants from './constants'
import { BaseAction } from '../../../types'

// action interface

export const searchFocus = (): BaseAction => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = (): BaseAction => ({
  type: constants.SEARCH_BLUR
})
