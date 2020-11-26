export const initialState = {
    loading: true,
    stories: [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_STORIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_STORIES_SUCCESS":
            return {
                ...state,
                loading: false,
                stories: action.payload
            };
        case "SEARCH_STORIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};