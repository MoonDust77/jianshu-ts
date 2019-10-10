import { Dispatch } from 'redux'
import axios from 'axios'
import * as constants from './constants'
import {
  IHomeAction,
  IHomeData,
  articleObject,
  IMoreListAction,
  IListChangePageAction
} from '../../../types'

const changeHomeData = (data: IHomeData): IHomeAction => ({
  type: constants.GET_HOME_INFO,
  writerPage: {
    page: 1,
    totalPages: Math.ceil(data.writerList.length / 10)
  },
  ...data
})

// 获取首页数据
export const getHomeData = (dispatch: Dispatch) => {
  axios.get('/api/homeData').then(({ data: res }) => {
    if (res.code === 0) {
      dispatch(changeHomeData(res.data))
    } else {
      console.error('获取首页数据失败...')
    }
  })
}

// 获取更多文章列表
export const getMoreList = (dispatch: Dispatch, page: number) => {
  axios.get(`/api/articleList?page=${page}`).then(({ data: res }) => {
    if (res.code === 0) {
      dispatch(setMoreArticleList(res.data, page))
    } else {
      console.error('获取文章列表数据失败...')
    }
  })
}

const setMoreArticleList = (
  data: Array<articleObject>,
  page: number
): IMoreListAction => ({
  type: constants.SET_MORE_ARTICLE,
  data,
  page
})

// 作者列表翻页
export const changeWriterListPage = (page: number): IListChangePageAction => ({
  type: constants.CHANGE_WRITER_LIST_PAGE,
  page
})
