import React from 'react';
import { Link } from 'react-router-dom'
import "./Story.css";

const StoryItem = ({ _id, imageUrl, name, category }) => {
    return (

        <div className="index-intro" style={{ display: 'block' }} >
            <div className="item top-2" >
                <a  >

                    <span className="full-label"></span>
                    <img src={imageUrl}
                        className="img-responsive item-img"
                    />
                    <div className="title"><p >
                        <Link to={`/stories/${_id}`}> {name}</Link>
                    </p>
                    </div>
                </a>
            </div>
            <div className="item top-2" >
                <a itemprop="url" >

                    <span className="full-label"></span>
                    <img src={imageUrl}
                        className="img-responsive item-img"
                    />
                    <div className="title"><p >
                        <Link to={`/stories/${_id}`}> {name}</Link>
                    </p>
                    </div>
                </a>
            </div>
            <div className="item top-2" >
                <a itemprop="url" >

                    <span className="full-label"></span>
                    <img src={imageUrl}
                        className="img-responsive item-img" itemprop="image"
                    />
                    <div className="title"><p itemprop="name">
                        <Link to={`/stories/${_id}`}> {name}</Link>
                    </p>
                    </div>
                </a>
            </div>
            <div className="item top-2" >
                <a itemprop="url" >

                    <span className="full-label"></span>
                    <img src={imageUrl}
                        className="img-responsive item-img" itemprop="image"
                    />
                    <div className="title"><p itemprop="name">
                        <Link to={`/stories/${_id}`}> {name}</Link>
                    </p>
                    </div>
                </a>
            </div>
            <div className="item top-2" >
                <a itemprop="url" >

                    <span className="full-label"></span>
                    <img src={imageUrl}
                        className="img-responsive item-img" itemprop="image"
                    />
                    <div className="title"><p itemprop="name">
                        <Link to={`/stories/${_id}`}> {name}</Link>
                    </p>
                    </div>
                </a>
            </div>

        </div>


    );
};
export default StoryItem;

