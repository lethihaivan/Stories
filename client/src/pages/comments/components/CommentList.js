import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) this.props.onDeleteComment(index);
  }

  render() {
    const { comments } = this.props;
    const reverseComments = [...comments].reverse()
    return (
      <ul className='comment-list-wrap border'>
        {reverseComments.map((comment, index) =>
          <Comment
            key={index}
            index={index}
            comment={comment}
            onDeleteComment={this.handleDeleteComment.bind(this)} />
        )}
      </ul>
    )
  }
}

export default CommentList;