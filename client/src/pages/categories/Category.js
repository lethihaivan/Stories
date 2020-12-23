import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
//import "./Story.css";

import authHeader from "../../services/auth-header";
//import CategoryItem from "./CategoryItem";


const Category = (match) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9091/api/categories`, { headers: authHeader() }).then(res => {
            const category = res.data;
            setCategory(category);
        });
    }, []);
    console.log(match);
    return (

        <div className="" >

            <div

                onChange={this.onChangeUser}>
                The Loai Truyen
                <h1></h1>
                <div style={{

                    "backgroundColor": "#F0FFFF",

                }}>

                    {category.data && category.data.map(category => {
                        return <tr><Link to={`catelogies/${category.title}`} key={category.id}
                            {...category}>{category.title}

                        </Link></tr>;
                    })}</div>
            </div>

        </div >
    )

};


export default Category;
