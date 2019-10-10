import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { IBaseStore, topicObject } from '../../../types'

import '../style.scss'

interface ITopicProps {
  topicList: Array<topicObject>
}
class Topic extends PureComponent<ITopicProps> {
  getList() {
    const { topicList } = this.props
    return topicList.map(item => (
      <div className="topic-item" key={item.id}>
        <img alt="topicImg" className="topic-pic" src={item.imgUrl} />
        {item.title}
      </div>
    ))
  }
  render(): JSX.Element {
    return <div className="topic-wrapper">{this.getList()}</div>
  }
}

const mapStateTopProps = (state: IBaseStore): ITopicProps => {
  const {
    homeReducer: { topicList }
  } = state
  return {
    topicList
  }
}

export default connect(mapStateTopProps)(Topic)
