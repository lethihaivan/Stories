
import React from 'react';
import { Link } from 'react-router-dom'
import "./Story.css";
var moment = require('moment')
const ListStory = ({ id, name, author, status, categories, updated_at }) => {
    var status = (status === 'unfulfilled') ? 'Đang cập nhật' : 'Hoàn thành'
    return (
        <tr>
            <td><Link to={`stories/${id}`}>{name}</Link></td>
            {categories.map(cat => <Link to={`catelogies/${cat.title}`} key={cat.id}>{cat.title}  | </Link>)}
            <td><Link to={`/${author}`}>{author}</Link></td>
            <td>{moment(updated_at).format("L")}</td>

        </tr>

    );
};
export default ListStory;