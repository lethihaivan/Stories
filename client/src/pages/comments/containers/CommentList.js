import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComments, deleteComment } from '../reducers/comments';

const COMMENTS = '__comment-comments__';

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func
  }

  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem(COMMENTS);
    comments = JSON.parse(comments) || [];
    // the initComments function is from mapStateToProps function.
    this.props.initComments(comments);
  }

  handleDeleteComment(index) {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];

    if (this.props.onDeleteComment) {
      // the onDeleteComment function is from mapDispatchToProps function.
      this.props.onDeleteComment(index);
    }
    // after deleted, updates comments in localStorage.
    localStorage.setItem(COMMENTS, JSON.stringify(newComments));
  }

  render() {
    return (
      <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment} />
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initComments: comments => {
      // creator: initComments
      dispatch(initComments(comments));
    },
    onDeleteComment: index => {
      // creator: onDeleteComment
      dispatch(deleteComment(index));
    }
  }
}

/** 
 * connect function:
 * connect CommentListContainer to store
 * pass `comments`, `initComments`, `onDeleteComment` to CommentListContainer
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
