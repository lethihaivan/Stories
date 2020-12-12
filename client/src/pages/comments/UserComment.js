import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./Comment.css";

import { getComments } from "../../services/auth-header";
class UserComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false,
            storyId: props.storyId,
        };

        this.addComment = this.addComment.bind(this);
        console.log(props.storyId);
    }

    componentDidMount() {
        this.setState({ loading: true });

        getComments("http://localhost:9091/api/comments")
            .then(res => {
                this.setState({
                    comments: res,
                    loading: false
                });
                console.log(res);
            })
            .catch(err => {
                this.setState({ loading: false });
            });

    }

    /**
     * 
     * @param {Object} comment
     */
    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments, this.state.storyId]
        });
    }
    render() {
        return (
            <div className="App container bg-light shadow" style={{
                "marginBottom": "100px",
            }}>
                <div className="row">
                    <div className="col-4  pt-3 border-right">
                        <h6>Comment about story</h6>
                        <CommentForm addComment={this.addComment} storyId={this.state.storyId} />
                    </div>
                    <div className="col-8  pt-3 bg-white">
                        <CommentList
                            loading={this.state.loading}
                            comments={this.state.comments}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default UserComment;