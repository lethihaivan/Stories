import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import { ChapterAPI } from '../../services'
import * as StoryAPI from "../../services/stories";
import './Chapter.css'
import { Link } from "react-router-dom";
//  chapter {chapter.id} / {chapter.chapter_name}

const ChapterDetail = ({ match }) => {
    console.log(match.params.id);
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


    const handleModalOpen = (idx) => {
        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    };


    const handleChange = (event) => {
        this.setState({ story: event.target.value, id: event.target.value });
    }


    const handleNextProject = () => {

        var arr = this.state.story.chapters.length;
        var idx = this.state.activeChapter + 1;
        var idx = idx % arr;

        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    }

    const handlePrevProject = () => {
        var arr = this.state.story.chapters.length;
        var idx = this.state.activeChapter;
        if (idx === 0) {
            var idx = arr - 1;
        } else {
            var idx = idx - 1;
        }
        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    }

    function nextTitle(idx, arr) {
        var i = idx + 1;
        var i = i % arr.length;
        return arr[i];
    }

    function prevTitle(idx, arr) {
        if (idx === 0) {
            var i = arr.length - 1;
        } else {
            var i = idx - 1;
        }
        return arr[i];
    }
    return (
        <div>
            <div className="nav-chapter" >
                <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"> </a></li>
                    <li><a href="#"></a></li>
                </ul>

            </div >
            <div>
                <div className="content-chapter">
                    <h3>Ten Truyen </h3>
                    <h5><Link> Ten chuong</Link></h5>
                    <div>


                    </div>
                </div>
            </div>

        </div>

    );


}

class Modal extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.description}</h3>
                <button onClick={this.props.onPrev}>{'\u2B05'} {this.props.previousTitle}</button>
                <button onClick={this.props.onNext}>{this.props.nextTitle} {'\u27A1'}</button>

            </div>
        );
    }
}



export default ChapterDetail;


/*
{ "_id" : ObjectId("5063114bd386d8fadbd6b004"),
"description" : "Connan",
 "rating": 0,
 "status": "unfulfilled",
"categories": [],
"chapters " :[] ,
 "name": "Connan tham tu lung danh",
 "author" :ObjectId("5fb491a7807f1b2b506be175")
} */
