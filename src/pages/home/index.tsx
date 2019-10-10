import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actionCreators } from './store'
import { IBaseStore, IHomeStore } from '../../types'
import Topic from './components/Topic'
import List from './components/List'

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
        <div className="home-right">right</div>
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
