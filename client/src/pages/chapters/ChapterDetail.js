import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import { ChapterAPI } from '../../services'
import * as StoryAPI from "../../services/stories";
import './Chapter.css'

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
    return (
        <div>


        </div>

    );


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
