import React, { useReducer, useEffect } from "react";
import Story from "./Story";
import spinner from "./ajax-loader.gif";
import Stories from "./Stories";
import Search from "./Search";
import { initialState, reducer } from "./search_reducer";
import axios from "axios";

const STORY_API_URL = "http://localhost:9091/api/stories/?s=man&apikey=4a3b711b";

const SearchStory = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(STORY_API_URL).then(jsonResponse => {
            dispatch({
                type: "SEARCH_STORIES_SUCCESS",
                payload: jsonResponse.data
            });
        });
    }, []);

    const refreshPage = () => {
        window.location.reload();
    };

    const search = searchValue => {
        dispatch({
            type: "SEARCH_STORIES_REQUEST"
        });

        axios(`http://localhost:9091/api/stories/?s=${searchValue}&apikey=4a3b711b`).then(
            jsonResponse => {
                if (jsonResponse.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_STORIES_SUCCESS",
                        payload: jsonResponse.data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_STORIES_FAILURE",
                        error: jsonResponse.data.Error
                    });
                }
            }
        );
    };

    const { stories, errorMessage, loading } = state;
    console.log(stories);
    const retrievedMovies =
        loading && !errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
                    stories.map((story, index) => (
                        <Stories key={`${index}-${story.Title}`} story={story} />
                    ))
                );

    return (
        <div className="App">
            <div className="m-container">

                <Search search={search} />

                <p className="App-intro">Sharing a few of our favourite movies</p>

                <div className="movies">{retrievedMovies}</div>
            </div>
        </div>
    );
};

export default SearchStory;

/**
 *
 *     fetch(url + '/couch-model/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'JWT ' + (JSON.parse(localStorage.getItem('token')).token)
        }
    })
*/