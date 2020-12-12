import React, { Component } from "react";

import StoryItem from "../../pages/stories/StoryItem"
export default class SrotySearch extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;

    }
    render() {
        let cards = <h3>Loading...</h3>;
        const { data } = this.props.location.state;
        console.log(data);
        console.log(data);
        if (data && data.stories) {
            cards = data.stories.data.map(story => <StoryItem key={story.id} {...story} style={{ "bottom": "1000px" }} />);
        }
        return (
            <div>
                <h1>Search Results</h1>
                <div className="">
                    <div className="">{cards}</div>
                </div>
            </div>
        );
    }
}

