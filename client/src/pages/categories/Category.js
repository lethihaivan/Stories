import axios from 'axios';
import React, { useEffect, useState } from "react";
//import "./Story.css";

import authHeader from "../../services/auth-header";
//import CategoryItem from "./CategoryItem";


const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9091/api/categories`, { headers: authHeader() }).then(res => {
            const category = res.data;
            setCategory(category);
        });
    }, []);
    return (

        <div className="">

            <select
                style={{
                    "height": "40px",
                    "width": "200px",
                    "marginLeft": "650px",
                    "Color": "#4E4E4E",
                    "background": "#f4f4f4"
                }}
                onChange={this.onChangeUser}>
                {category.data && category.data.map(category => {
                    return <option key={category.id} >{category.title}</option>;
                })}
            </select>

        </div>
    )

};


export default Category;
