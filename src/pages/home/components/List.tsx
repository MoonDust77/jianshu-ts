import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'

import { IBaseStore, articleObject } from '../../../types'
import { actionCreators } from '../store'

import '../style.scss'

interface IListState {
  articleList: Array<articleObject>
  articlePage: number
}

interface IListDispatch {
  getMoreList: (page: number) => void
}

interface IListProps extends IListState, IListDispatch {}

class List extends PureComponent<IListProps> {
  getList() {
    const { articleList } = this.props
    return articleList.map(item => (
      <Link key={item.id} to={`/detail/${item.id}`}>
        <div className="list-item">
          <img alt="listImg" src={item.imgUrl} className="pic" />
          <div className="list-info">
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.desc}</p>
          </div>
        </div>
      </Link>
    ))
  }
  render(): JSX.Element {
    const { getMoreList, articlePage } = this.props
    return (
      <div>
        {this.getList()}
        <div className="load-more" onClick={() => getMoreList(articlePage)}>
          加载更多
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IBaseStore): IListState => {
  const {
    homeReducer: { articleList, articlePage }
  } = state
  return {
    articleList,
    articlePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IListDispatch => {
  return {
    getMoreList(page) {
      actionCreators.getMoreList(dispatch, page + 1)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
