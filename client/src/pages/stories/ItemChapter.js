import React from "react";
import { Link } from 'react-router-dom'
const ItemChapter = ({ storyId, index, name, id }) => {


    return (
        <li key={id} className='chapter'
            style={
                {
                    "padding": "10px 0",
                    "white-space": "nowrap",
                    "overflow": "hidden",
                    "text-overflow": "ellipsis",
                }
            }
        >
            <span class="glyphicon glyphicon-certificate"></span>

            <Link to={`${storyId}/${index}`} className='chapter' key={index}>
                <span class="chapter-text"><span> Chuong {index} :  {name} </span></span></Link>
        </li>
    );

}

export default ItemChapter;