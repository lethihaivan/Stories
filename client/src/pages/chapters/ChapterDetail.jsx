import React, { useState, useEffect } from 'react'
import { Link,  } from "react-router-dom";
import { ChapterAPI } from '../../services'


export const ChapterDetail = (props) =>{
    const {match, location} = props
    const [chapter, setChapter] = useState({})
    // const
    useEffect(()=>{
        console.log(match.params.id)
        ChapterAPI.getById(match.params.id)
            .then(res => setChapter(res))
    }, [])

    // useEffect(()=>{
        
    // }, [props.name])

    return (
    <div>chapter {chapter.id} / {chapter.chapter_name}</div>
    )
}
