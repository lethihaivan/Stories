import React from "react";

import classes from "./Story.module.css";
import { truncStr } from "./utils";

const ResultSearch = props => {
    const { name, description } = props.item;

    return (
        <div
            className={classes.Container}
            style={{
                backgroundImage:
                    description
            }}
        >
            <div className={classes.Bottom}>
                <h3 className={classes.Title}>{truncStr(name, 19)}</h3>
            </div>
        </div>
    );
};

export default ResultSearch;
