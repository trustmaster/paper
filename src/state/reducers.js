import { combineReducers } from 'redux';
import { CREATE_POST, SET_TITLE, SET_DESCRIPTION, SET_POST_TITLE, SET_POST_DATE, SET_POST_TEXT, DELETE_POST, MOVE_POST } from "./actions";

const initialState = {
    title: 'My Blog on Paper',
    description: 'Minimalist blog writing and display as if I was writing it on paper',
    posts: [
    ],
};

export function title(state = initialState.title, action) {
    switch (action.type) {
        case SET_TITLE:
            return action.title;
        default:
            return state;
    }
}

export function description(state = initialState.description, action) {
    switch (action.type) {
        case SET_DESCRIPTION:
            return action.description;
        default:
            return state;
    }
}

export function posts(state = [], action) {
    switch (action.type) {
        case CREATE_POST:
            return [
                ...state,
                {
                    id: action.id,
                    index: state.length + 1,
                    title: '',
                    date: action.date,
                    text: '',
                },
            ];
        case SET_POST_TITLE:
            return state.map((post) => {
                if (post.id === action.id) {
                    return Object.assign({}, post, { title: action.title });
                }
                return post;
            });
        case SET_POST_DATE:
            return state.map((post) => {
                if (post.id === action.id) {
                    return Object.assign({}, post, { date: action.date });
                }
                return post;
            });
        case SET_POST_TEXT:
            return state.map((post) => {
                if (post.id === action.id) {
                    return Object.assign({}, post, { text: action.text });
                }
                return post;
            });
        case DELETE_POST:
            return state.filter((post) => post.id !== action.id);
        case MOVE_POST:
            return state.map((post) => {
                // TODO change this so that indexes don't grow rapidly
                if (post.id === action.id) {
                    return Object.assign({}, post, { index: action.index });
                }
                if (post.index >= action.index) {
                    return Object.assign({}, post, { index: post.index + 1 });
                }
                return post;
            });
        default:
            return state;
    }
}

const blog = combineReducers({
    title,
    description,
    posts,
});

export default blog;