
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/user.service";
import "./Category.css"

const StoryOfAuthor = (match) => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setStories(response.data);
            },
            (error) => {
                const stories =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    }, []);

    console.log(stories.data);
    return (
        <div>
            <div>
                <h1 style={{
                    "fontWeight": "15px",
                    "color": "black"
                }}
                > Tác giả {match.match.params.author} </h1>
            </div>
            <div className="" style={{
                "display": "flex",
                "marginTop": "30px"
            }} >
                <div>
                    {stories.data && stories.data.map(story => {
                        var status = (story.status === 'unfulfilled') ? 'Đang cập nhật' : 'Hoàn thành'
                        return story.author.fullName === match.match.params.author && <div className="row"><div className="col-xs-3">
                            <div>
                                <Link to={`/stories/${story.id}`}> <img
                                    style={{
                                        "height": "100px",
                                        "width": "200px"
                                    }}
                                    src={story.description} class="cover" />   </Link>
                            </div>
                        </div>
                            <div className="col-xs-7">
                                <div>
                                    <h3>
                                        <span class="glyphicon glyphicon-book"></span>
                                        <Link to={`/stories/${story.id}`}> {story.name}  </Link>
                                    </h3><span class="author">
                                        <i class="fa fa-list-alt" aria-hidden="true"></i>
                                        {story.categories.map(cat => <Link to={`catelogies/${cat.title}`} key={cat.id}>   |  {cat.title}  | </Link>)}</span></div>
                            </div>
                            <div className="col-xs-2 text-info">
                                {status}
                            </div>

                        </div>
                    })}
                </div>


            </div >
        </div>



    );
};

export default StoryOfAuthor;
{/*  */ }