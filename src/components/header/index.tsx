import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { IBaseStore, IHeaderStore } from '../../types/index'
import { actionCreators } from './store'

import './style.scss'

interface IHeaderDispatch {
  handleInputFocus: (list: Array<string>) => void
  handleInputBlur: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  handleChangePage: (
    page: number,
    totalPage: number,
    spin: HTMLSpanElement | null
  ) => void
}
interface IHeaderProps extends IHeaderStore, IHeaderDispatch {}

class Header extends Component<IHeaderProps, {}> {
  private spinIcon: HTMLSpanElement | null
  constructor(props: IHeaderProps) {
    super(props)
    this.spinIcon = null
  }
  getListArea(): JSX.Element | null {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    let pageList = []
    if (list.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (list[i]) {
          pageList.push(
            <a key={i} className="search-info-item">
              {list[i]}
            </a>
          )
        } else {
          break
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <div
          className="search-info"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="search-info-title">
            <span>热门搜索</span>
            <div
              className="search-info-switch"
              // tslint:disable-next-line: jsx-no-multiline-js
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                className="iconfont spin"
                ref={icon => (this.spinIcon = icon)}
              >
                &#xe600;
              </span>
              换一批
            </div>
          </div>
          <div className="search-info-list">{pageList}</div>
        </div>
      )
    } else {
      return null
    }
  }

  render(): JSX.Element {
    const { handleInputFocus, handleInputBlur, focused, list } = this.props
    return (
      <div className="header-Wrapper">
        <div className="logo" />
        <div className="nav">
          <div className="nav-item left active">首页</div>
          <div className="nav-item left">下载APP</div>
          <div className="nav-item right">登录</div>
          <div className="nav-item right">
            <span className="iconfont">&#xe636;</span>
          </div>
          <div className="nav-search-wrapper">
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <input
                type="text"
                placeholder="搜索"
                className={focused ? 'nav-search focused' : 'nav-search'}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}
            >
              &#xe64d;
            </span>
            {this.getListArea()}
          </div>
          <div className="addition">
            <div className="button writting">
              <span className="iconfont">&#xe601;</span>写文章
            </div>
            <div className="button reg">注册</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateTopProps = (state: IBaseStore): IHeaderStore => {
  let { headerReducer } = state
  return {
    ...headerReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IHeaderDispatch => {
  return {
    handleInputFocus(list: Array<string>) {
      list.length === 0 && actionCreators.getList(dispatch)
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(
      page: number,
      totalPage: number,
      spin: HTMLSpanElement | null
    ) {
      let originAngle = 0
      if (spin!.style.transform) {
        originAngle = parseInt(
          spin!.style.transform.replace(/[^0-9]/gi, ''),
          10
        )
      }
      spin!.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Header)
