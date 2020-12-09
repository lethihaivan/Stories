import React from 'react';
import { Link } from 'react-router-dom'
//import "./Story.css";

const CategoryItem = ({ id, title }) => {
    return (

        <div>
            <select id="hot-select" className="form-control new-select"  >
                <option key={id} style={{ 'fontSize': '13px' }}>{title}</option>
            </select>
        </div>
    );
};
export default CategoryItem;
