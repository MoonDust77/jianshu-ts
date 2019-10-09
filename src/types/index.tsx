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

// ---------------stores type--------------------
export interface IBaseStore {
  headerReducer: IHeaderStore
}

export interface IHeaderStore {
  focused: boolean
  mouseIn: boolean
  list: Array<string>
  page: number
  totalPage: number
}
