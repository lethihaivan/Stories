import React from 'react';
import { Link } from 'react-router-dom'
//import "./Story.css";

const CategoryItem = ({ id, title }) => {
    return (

        <div>
            <select id="hot-select" className="form-control new-select" aria-label="Chọn thể loại">
                <option key={id}>{title}</option>
            </select>
        </div>
    );
};
export default CategoryItem;
