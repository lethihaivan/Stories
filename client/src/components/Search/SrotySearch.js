import React from "react";
import classes from "./Stories.module.css";
import StoryItem from "../../pages/stories/StoryItem"
const SrotySearch = ({ stories, props }) => {
    let cards = <h3>Loading...</h3>;
    console.log(props);

    if (stories) {
        cards = stories.map(story => <StoryItem key={story.id} {...story} style={{ "bottom": "1000px" }} />);
    }
    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>{cards}</div>
        </div>
    );
};

export default SrotySearch;
