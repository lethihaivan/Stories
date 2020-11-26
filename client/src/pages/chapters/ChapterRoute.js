import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    //useParams
  } from "react-router-dom";
import { Chapter } from "./Chapter";
import { ChapterDetail } from "./ChapterDetail";


export const ChapterRouter =(props)=>{

    const { match } = props
    // const match = props.match
    // const location = props.location
    // console.log(location.search, match)
    return(
        <Switch>
            <Route exact path={`${match.path}`} component={Chapter}></Route>
            <Route exact path={`${match.path}/:id`} component={ChapterDetail}></Route>
        </Switch>
    )
}