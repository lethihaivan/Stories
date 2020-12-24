import React from 'react';
import { Link } from 'react-router-dom'
import "./Story.css";

const StoryFull = ({ id, description, name, category }) => {
    return (

        <div className="index-intro" style={{ "display": "flex" }} >

            <a href="https://truyenfull.vn/noi-nay-co-anh/" title={name} >
                <img src={description} >
                </img><div class="caption"><h3>{name}</h3></div></a></div>



    );
};
export default StoryFull;