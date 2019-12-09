import React, { Component } from 'react'
import { Col } from 'antd'

export default class PostList extends Component {
  renderPostList() {
    return this.props.postList.map(post =>
      <div>{post.author.name}<br />{post.message}<br />
        <img style={{ height: '300px' }} src={post.author.profilePic} /></div>)
  }

  render() {
    return (
      <Col>
        {this.renderPostList()}
      </Col>
    )
  }
}
