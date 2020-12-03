import React from "react";

import classes from "./Story.module.css";
import { truncStr } from "./utils";

const ResultSearch = props => {
    const { name, imageUrl, vote_average } = props.item;

    return (
        <div
            className={classes.Container}
            style={{
                backgroundImage:
                    imageUrl && `url(http://image.tmdb.org/t/p/w185${imageUrl})`
            }}
        >
            <div className={classes.VoteContainer}>
                <span className={classes.Vote}>{vote_average}</span>
            </div>

            <div className={classes.Bottom}>
                <h3 className={classes.Title}>{truncStr(name, 19)}</h3>
            </div>
        </div>
    );
};

export default ResultSearch;
