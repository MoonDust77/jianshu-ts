// ----------------actions type------------------
export interface IBaseAction {
  type: string
}

export interface IHeaderListAction extends IBaseAction {
  data: object
  totalPage: number
}

export interface IHeaderListChangePageAction extends IBaseAction {
  page: number
}

export interface IHomeAction extends IBaseAction, IHomeData {
  writerPage: {
    page: number
    totalPages: number
  }
}

// ---------------stores type--------------------
export interface IBaseStore {
  headerReducer: IHeaderStore
  homeReducer: IHomeStore
}

export interface IHeaderStore {
  focused: boolean
  mouseIn: boolean
  list: Array<string>
  page: number
  totalPage: number
}

export interface IHomeStore extends IHomeData {
  writerPage: {
    page: number
    totalPages: number
  }
}

// 数据结构
export interface topicObject {
  id: number
  title: string
  imgUrl: string
}

export interface articleObject {
  id: string
  title: string
  desc: string
  imgUrl: string
}

export interface writerObject {
  id: string
  writerPageUrl: string
  avatarUrl: string
  writerInfo: string
}

export interface IHomeData {
  topicList: Array<topicObject>
  articleList: Array<articleObject>
  writerList: Array<writerObject>
}
