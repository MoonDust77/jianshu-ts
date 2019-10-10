import * as constants from './constants'

import { IHomeStore } from '../../../types/index'

const defaultState: IHomeStore = {
  topicList: [],
  articleList: [],
  writerList: [],
  articlePage: 1,
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
    case constants.SET_MORE_ARTICLE:
      return {
        ...state,
        articleList: state.articleList.concat(action.data),
        articlePage: action.page
      }
    default:
      return state
  }
}
