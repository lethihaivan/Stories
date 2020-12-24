
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/user.service";
import Category from "./Category";
import "./Category.css"

const StoryOfCatelogies = (match) => {
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
    console.log(match.match.params.name_cate);
    return (
        <div>
            <div>
                <h1 style={{
                    "fontWeight": "15px",
                    "color": "black"
                }}
                > Thể loại {match.match.params.name_cate}</h1>
            </div>
            <div className="" style={{
                "display": "flex",
                "marginTop": "30px"
            }} >
                <div>
                    {stories.data && stories.data.map(story => {
                        var status = (story.status === 'unfulfilled') ? 'Đang cập nhật' : 'Hoàn thành'
                        var cata = story.categories.map(cat => cat.title)
                        return (cata[0] === match.match.params.name_cate ||
                            cata[1] === match.match.params.name_cate ||
                            cata[2] === match.match.params.name_cate) && <div className="row"><div className="col-xs-3">
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
                                        </h3><span class="author"><span class="glyphicon glyphicon-pencil">
                                        </span><Link to={`/${story.author.fullName}`}>{story.author.fullName}</Link></span></div>
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

export default StoryOfCatelogies;
{/*  */ }