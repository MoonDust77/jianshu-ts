import * as constants from './constants'

import { IHomeStore } from '../../../types/index'

const defaultState: IHomeStore = {
  topicList: [],
  articleList: [],
  writerList: [],
  writerPage: {
    page: 1,
    totalPages: 1
  }
}

export default (state: IHomeStore = defaultState, action: any): IHomeStore => {
  switch (action.type) {
    case constants.GET_HOME_INFO:
      return {
        ...state,
        topicList: action.topicList,
        articleList: action.articleList,
        writerList: action.writerList,
        writerPage: action.writerPage
      }
    default:
      return state
  }
}
