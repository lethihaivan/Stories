import React from 'react';
import { Link } from 'react-router-dom'
import "./Story.css";

const StoryItem = ({ id, description, name, category }) => {
    return (

        <div className="index-intro" style={{ display: 'block' }} >
            <div className="item top-2" >
                <a  >
                    <span className="full-label"></span>
                    <img src={description}
                        className="img-responsive item-img"
                    />
                    <div class='item-top-title'>
                        <h3 class='item-top-name item-top-name-size'> <Link to={`/stories/${id}`}> {name}</Link></h3>
                    </div>
                </a>
            </div>
        </div>


    );
};
export default StoryItem;

