import React, { Component } from 'react';
import { search } from './utils'
import { Redirect } from "react-router-dom"
class SearchStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: null,
            loading: false,
            value: ''
        };

        console.log(this.props)
    }
    search = async val => {
        this.setState({ loading: true });

        const res = await search(
            `http://localhost:9091/api/stories?page=1&limit=5&q=${val}`
        );
        const stories = res;
        this.setState({ stories, loading: false });
    };
    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({
            value: e.target.value,
            stories: e.target.stories
        });
    };
    render() {
        return (
            <div >
                <input style={{
                    'marginTop': '20px',
                    "width": "300px",
                    "height": "40px",
                    'marginLeft': '80px',
                    'fontSize': '15px'
                }}
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                />
                {this.state.value &&
                    <Redirect to={{
                        pathname: `/search/${this.state.value}`,
                        state: { data: this.state }
                    }} />
                }
                {this.state.value == "" &&
                    <Redirect to={{
                        pathname: "/",
                        state: { data: this.state }
                    }} />
                }
            </div>
        );
    }
}
export default SearchStory;
