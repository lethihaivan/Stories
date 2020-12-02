import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as StoryAPI from "../../services/stories";
//import * as ChapterAPI from "../../services/ChapterAPI";
import './Chapter.css';

const Chapter = ({ match }) => {

    const [story, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        StoryAPI.getById(match.params.id).then(res => {
            const story = res;
            setStories(story);
            setIsLoading(false);

        });
    }, []);
    console.log(match.params.index)
    return (
        <div id="wrap">
            <div id="space-between" className="container chapter">

                {story && story.chapters && story.chapters.map((chapter) => {
                    if (chapter.index == match.params.index) {
                        return (

                            <div>
                                <div className="navbar-breadcrumb">
                                    <div className="container breadcrumb-container">
                                        <ol className="breadcrumb">
                                            <li >
                                                <Link to={"/home"} >
                                                    <span itemprop="name">Truyện   /</span>
                                                </Link></li>
                                            <li>
                                                <Link to={`/stories/${match.params.id}`}> {story.name}
                                                    <span itemprop="name">     / </span></Link>
                                            </li>
                                            <li >
                                                <Link to={`${chapter.index}`} className='chapter' key={chapter.index}>
                                                    <span class="chapter-text"><span> Chuong {chapter.index} :  {chapter.name} </span></span></Link>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-chapter" key={chapter.id}>
                                        <div style={{ "textAlign": "center" }}>

                                            <h2> {story.name} </h2>
                                            <h5><Link> {chapter.name}</Link></h5>
                                            <hr className="chapter-start" />
                                            <div className="chapter-nav" id="chapter-nav-top">
                                                <div className="btn-group">
                                                    <a className="btn btn-success btn-chapter-nav disabled" href="" title="Không có chương trước" id="prev_chap" data-cid="">
                                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                                        <span className="hidden-xs">Chương </span>trước</a>
                                                    <button type="button" class="btn btn-success btn-chapter-nav chapter_jump">
                                                        <span className="glyphicon glyphicon-list-alt"></span>
                                                        <select
                                                            style={{

                                                                "Color": "#4E4E4E",
                                                                "background": "#f4f4f4",
                                                                "fontSize": "15px"
                                                            }}
                                                            onChange={this.onChangeUser}>
                                                            {story && story.chapters && story.chapters.map((chapter) => {
                                                                return <option key={chapter.id} > Chuong {chapter.index}</option>;
                                                            })}
                                                        </select>
                                                    </button><a className="btn btn-success btn-chapter-nav" href="https://truyenfull.vn/xuyen-thanh-qua-tim-nho-cua-nam-phu/chuong-2/" title="Chương 2" id="next_chap" data-cid="2784743">
                                                        <span className="hidden-xs">Chương </span>tiếp <span class="glyphicon glyphicon-chevron-right"></span>
                                                    </a>

                                                </div>
                                            </div>
                                            <hr className="chapter-end"></hr>
                                            <div id="chapter-c" className="chapter-c">
                                                <div className="visible-md visible-lg ads-responsive incontent-ad" id="ads-chapter-pc-top" style={{ "height": "30px" }} >
                                                </div>
                                                <p> {chapter.content}</p>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )
                    }

                })}

            </div>
        </div>

    )
}

export default Chapter;

{/*  */ }