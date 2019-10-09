import Mock from 'mockjs'
import api from './api'

Mock.mock(/\/api\/headerList/, 'get', api.headerList)
Mock.mock(/\/api\/writerList/, 'get', api.writerList)
Mock.mock(/\/api\/topicList/, 'get', api.topicList)
Mock.mock(/\/api\/articleList/, 'get', api.articleList)
Mock.mock(/\/api\/homeData/, 'get', api.homeData)
