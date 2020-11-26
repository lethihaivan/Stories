import React, { useEffect, useState } from "react";
import * as StoryAPI from "../../services/stories";
import "./Chapter.css";

//import Flag from 'react-flags';
const ListChapter = ({ match }) => {
    console.log(match.params.id);
    const [story, setStories] = useState([]);

    useEffect(() => {
        StoryAPI.getById(match.params.id).then(res => {
            const story = res.data;
            setStories(story);
        });
    }, []);
    console.log(story);
    return (
        <div>
            <div class="col-xs-12 text-center no-padding">
                <div class="text-center ads-holder ads-taboola ads-taboola-truyen" id="ads-taboola-truyen">
                </div>
            </div>
            <div class="col-xs-12" id="list-chapter">
                <div class="title-list">
                    <h2>Danh sách chương</h2>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <ul class="list-chapter">
                            <li><span class="glyphicon glyphicon-certificate">
                            </span>
                                <a href="https://truyenfull.vn/vu-luyen-dien-phong/chuong-1/"
                                    title="Vũ Luyện Điên Phong - Chương 1: Tiểu tư quét rác">
                                    <span class="chapter-text"><span>Chương </span></span>
                                        1: Tiểu tư quét rác</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ListChapter;
