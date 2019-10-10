import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IBaseStore, writerObject } from '../../../types'
import { actionCreators } from '../store'

interface IWriterState {
  writerList: Array<writerObject>
  writerPage: {
    page: number
    totalPages: number
  }
}

interface IWriterDispatch {
  changePage: (page: number, totalPages: number) => void
}

interface IWriterProps extends IWriterState, IWriterDispatch {}

class Writer extends PureComponent<IWriterProps> {
  render(): JSX.Element {
    const { writerPage, changePage } = this.props
    return (
      <div className="writer-box">
        <div className="writer-title">
          <span>推荐作者</span>
          <span
            className="btn-change"
            onClick={() => changePage(writerPage.page, writerPage.totalPages)}
          >
            换一换
          </span>
        </div>
        <div className="writer-list">{this.createWriterList()}</div>
      </div>
    )
  }

  createWriterList(): Array<JSX.Element> {
    const { writerList, writerPage } = this.props
    let page = writerPage.page
    let pageList = []

    if (writerList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        let item = writerList[i]
        pageList.push(
          <div className="writer-item" key={item.id}>
            <a href={item.writerPageUrl} className="item-left">
              <img src={item.avatarUrl} alt="" />
            </a>
            <div className="item-right">
              <div className="writer-title">
                <a href={item.writerPageUrl}>阿栈</a>
                <span className="follow">+关注</span>
              </div>
              <div className="writer-info">{item.writerInfo}</div>
            </div>
          </div>
        )
      }
    }
    return pageList
  }
}

const mapStateToProps = (state: IBaseStore): IWriterState => {
  const {
    homeReducer: { writerList, writerPage }
  } = state
  return { writerList, writerPage }
}

const mapDispatchToProps = (dispatch: Dispatch): IWriterDispatch => {
  return {
    changePage(page, totalPages) {
      if (page < totalPages) {
        dispatch(actionCreators.changeWriterListPage(page + 1))
      } else {
        dispatch(actionCreators.changeWriterListPage(1))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer)
