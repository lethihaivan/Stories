
import React, { useEffect, useState } from "react";
import * as StoryAPI from "../../services/stories";
import "./Story.css";
import { Link } from "react-router-dom";


const DelStory = ({ match, location }) => {
    console.log(match.params.id);
    const storyId = match.params.id
    const [story, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState({ story: false, chapter: false });


    useEffect(() => {
        setIsLoading({ ...isLoading, story: true });
        StoryAPI.getById(storyId).then(res => {
            const story = res;
            setStories(story);
        })
            .catch(err => console.log(err))
            .finally(() => setIsLoading({ ...isLoading, story: false }))
    }, []);
    const [toggled, setToggled] = useState(true);


    return (
        <div>
            {
                isLoading.story ? (
                    <div>Loading ...</div>
                ) : (
                        <div>
                            <button
                            /*    onClick={(event) => {
                                   setToggled(!story.isLiked);
                                   onClick(event);
                               }} */
                            >Remove</button>
                        </div>
                    )
            }

        </div>

    );
};


export default DelStory;