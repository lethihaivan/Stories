import React, { Component } from "react";
import { postComments } from "../../services/auth-header";
import StoryAPI from "../../services/storyAPI"
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",
      comment: {
        storyId: props.storyId,  //name
        content: ""                //mesage
      }

    };

    console.log(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      story: [],
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };
  onSubmit(e) {

    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    this.setState({ error: "", loading: true });

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    let { comment } = this.state;
    postComments({
      comment
    })
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {

          this.props.addComment(comment);


          this.setState({
            loading: false,
            comment: { ...comment, content: "" }
          });

        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form .",
          loading: false
        });
      });
  }

  isFormValid() {
    return this.state.comment.content !== ""; //this.state.comment.name !== "" &&
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.content}
              className="form-control"
              placeholder="🤬 Your Comment"
              name="content"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}