import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onAddComment: PropTypes.func.isRequired,
    onUsernameBlur: PropTypes.func,
    textareaRef: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      comment: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    if (this.state.username) this.props.textareaRef.current.focus();  // React.js 16.3+ support ref forwarding
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handleUsernameBlur(evt) {
    if (this.props.onUsernameBlur) {
      this.props.onUsernameBlur(evt.target.value);
    }
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  handleComment() {
    const { username, comment } = this.state;
    if (this.props.onAddComment) {
      this.props.onAddComment({
        username,
        comment,
        createTime: +new Date()
      });
    }

    this.setState({ comment: '' });
  }

  render() {
    const { username, comment } = this.state;

    return (
      <div className='comment-input-wrap border'>
        <div className='username'>
          <label>UserName ：</label>
          <input
            type='text'
            className='border'
            value={username}
            onChange={this.handleUsernameChange}
            onBlur={this.handleUsernameBlur} />
        </div>
        <div className='comment'>
          <label>Content：</label>
          <textarea
            className='border'
            ref={this.props.textareaRef}
            value={comment}
            onChange={this.handleCommentChange} />
        </div>
        <div className='release clearfix'>
          <button className='fr border' onClick={this.handleComment}>Public</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
