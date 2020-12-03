import React, { Component } from 'react';
import axios from 'axios';
import { search } from './utils'
import SrotySearch from './SrotySearch';

class SearchStory extends Component {
    state = {
        stories: null,
        loading: false,
        value: ''
    };

    search = async val => {
        this.setState({ loading: true });
        // const res = await axios(
        const res = await search(
            `http://localhost:9091/api/stories?page=1&limit=5&q=${val}`
        );
        const stories = res;

        this.setState({ stories, loading: false });
    };
    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };

    get renderMovies() {
        let stories = <h1>There's no movies</h1>;
        if (this.state.stories) {
            stories = <SrotySearch list={this.state.stories} />;
        }

        return stories;
    }

    render() {
        return (
            <div >
                <input
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                />
                {this.renderMovies}
            </div>
        );
    }
}

export default SearchStory;
