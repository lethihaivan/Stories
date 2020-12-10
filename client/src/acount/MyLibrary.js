import React, { useState, useEffect } from "react";
import StoryItem from "../pages/stories/StoryItem";
import UserService from "../services/user.service";
import { Link } from "react-router-dom";
const MyLibrary = () => {
    // const [content, setContent] = useState("");
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState({ story: false, chapter: false });
    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setStories(response.data);
                setIsLoading({ ...isLoading, story: true });
            },
            (error) => {
                const stories =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setIsLoading({ ...isLoading, story: false })
            }
        );
    }, []);
    console.log(stories);
    const [toggled, setToggled] = useState(true);

    return (
        <div >
            <body >
                <div id="wrap"  >
                    {stories.data && stories.data.map(story => {
                        if (story.isLiked) {
                            return (
                                <div style={{ "bottom": "1000px" }} >
                                    <div className="index-intro" style={{ display: 'block' }} key={story.id} {...story}>
                                        <div className="item top-2" >
                                            <a  >
                                                <span className="full-label"></span>
                                                <img src={story.description}
                                                    className="img-responsive item-img"
                                                />
                                                <div className='item-top-title'>
                                                    <h3 className='item-top-name item-top-name-size'> <Link to={`/stories/${story.id}`}> {story.name}</Link></h3>
                                                </div>
                                            </a>
                                            <div style={{
                                                "display": "flex",
                                                "justifyContent": "center"
                                            }}>
                                                <button className="btn btn-danger"
                                                    onClick={() => setToggled(!toggled)}

                                                >Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </body>
        </div >
    );
};

export default MyLibrary;
//className="jumbotron"


