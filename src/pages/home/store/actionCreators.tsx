import { Dispatch } from 'redux'
import axios from 'axios'
import * as constants from './constants'
import { IHomeAction, IHomeData } from '../../../types'

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
