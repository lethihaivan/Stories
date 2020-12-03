import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentInput from '../components/CommentInput';
import { addComment } from '../reducers/comments';

const USERNAME = '__comment-app-username__';
const COMMENTS = '__comment-comments__';

class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onAddComment: PropTypes.func
  }

  constructor() {
    super();
    this.state = {
      username: ''
    };

    this.textareaElement = React.createRef();

    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  componentWillMount() {
    this._loadUsername();
  }

  _loadUsername() {
    const username = localStorage.getItem(USERNAME) || '';
    this.setState({ username });
  }

  _saveComments(comments) {
    localStorage.setItem(COMMENTS, JSON.stringify(comments));
  }

  handleUsernameBlur(username) {
    localStorage.setItem(USERNAME, username);
  }

  handleAddComment(comment) {
    if (!comment) return false;
    if (!comment.username) {
      alert('请输入用户名');
      return false;
    }
    if (!comment.comment) {
      alert('请输入评论内容');
      this.textareaElement.current.focus();
      return false;
    }

    if (this.props.onAddComment) {
      this.props.onAddComment(comment);
    }
    const { comments } = this.props;
    comments.push(comment);
    this._saveComments(comments);
  }

  render() {
    return(
      <CommentInput
        textareaRef={this.textareaElement}
        username={this.state.username}
        onUsernameBlur={this.handleUsernameBlur}
        onAddComment={this.handleAddComment} />
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: comment => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer);
