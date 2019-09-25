import React, { Component, Dispatch } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { HeaderStore, BaseAction } from '../../types/index'
import { actionCreators } from './store'

import './style.scss'

interface FormProps {
  focused: boolean
  handleInputFocus: () => void
  handleInputBlur: () => void
}

class Header extends Component<FormProps> {
  getListArea(): JSX.Element | null {
    return (
      <div className="search-info">
        <div className="search-info-title">
          <span>热门搜索</span>
          <div className="search-info-switch">
            <span className="iconfont spin">&#xe600;</span>
            换一批
          </div>
        </div>
        <div className="search-info-list">123</div>
      </div>
    )
  }

  render(): JSX.Element {
    const { handleInputFocus, handleInputBlur } = this.props
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
            <CSSTransition timeout={200} classNames="slide">
              <input
                type="text"
                placeholder="搜索"
                className="nav-search"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className="iconfont zoom">&#xe64d;</span>
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

const mapStateTopProps = (state: HeaderStore<string, any>) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Header)
