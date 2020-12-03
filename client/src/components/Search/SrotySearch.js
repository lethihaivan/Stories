import React from "react";

import ResultSearch from "./ResultSearch";
import classes from "./Stories.module.css";

const SrotySearch = ({ list }) => {
    let cards = <h3>Loading...</h3>;

    if (list) {
        cards = list.map((m, i) => <ResultSearch key={i} item={m} />);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>{cards}</div>
        </div>
    );
};

export default SrotySearch;
