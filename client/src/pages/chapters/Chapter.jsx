import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ChapterAPI } from '../../services'
import './Chapter.css'

export const Chapter = (props) =>{
    const {match, location} = props
    const [chapters, setChapters] = useState([])

    useEffect(()=>{
        console.log(match, location, 'chpter')
        ChapterAPI.list()
        .then(res => setChapters(res))
    }, [])

    // useEffect(()=>{
        
    // }, [props.name])

    return (
        <ul>
            {chapters.map((c,index) =>{
                return(
                    <li key={c.id} className='chapter'>
                        asd
                        <Link to={`${match.path}/${c.id}`} className='chapter'>  {c.chapter_name} </Link>
                      
                    </li>
                )
            })}
        </ul>
    )
}
