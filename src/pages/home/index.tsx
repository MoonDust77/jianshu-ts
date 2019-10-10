import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actionCreators } from './store'
import { IBaseStore, IHomeStore } from '../../types'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/writer'

import './style.scss'

interface IHomeDispatch {
  getHomeData: () => void
}

interface IHomeProps extends IHomeStore, IHomeDispatch {}

class Home extends Component<IHomeProps> {
  componentDidMount() {
    this.props.getHomeData()
  }
  render(): JSX.Element {
    return (
      <div className="home-wrapper">
        <div className="home-left">
          <img
            alt="homeImg"
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </div>
        <div className="home-right">
          <Recommend />
          <a
            className="download-box"
            href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click"
          >
            <img
              src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt="qrcode"
              className="qrcode-img"
            />
            <div className="download-info-box">
              <div className="title">下载简书手机App</div>
              <div className="desc">随时随地发现和创作内容</div>
            </div>
          </a>
          <Writer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IBaseStore): IHomeStore => {
  let { homeReducer } = state
  return {
    ...homeReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IHomeDispatch => {
  return {
    getHomeData() {
      actionCreators.getHomeData(dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
