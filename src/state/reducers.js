import { combineReducers } from 'redux';
import {
    CREATE_POST,
    SET_TITLE,
    SET_DESCRIPTION,
    SET_POST_TITLE,
    SET_POST_DATE,
    SET_POST_TEXT,
    DELETE_POST,
    MOVE_POST,
    OPEN_DIALOG,
    CLOSE_DIALOG,
} from './actions';
import initialState from './initial';

export function title(state = initialState.title, action = '') {
    switch (action.type) {
    case SET_TITLE:
        return action.title;
    default:
        return state;
    }
}

export function description(state = initialState.description, action = '') {
    switch (action.type) {
    case SET_DESCRIPTION:
        return action.description;
    default:
        return state;
    }
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export function posts(state = initialState.posts, action = '') {
    switch (action.type) {
    case CREATE_POST:
        return [
            {
                id: action.id,
                index: state.length + 1,
                title: '',
                date: action.date,
                text: '',
            },
            ...state,
        ];
    case SET_POST_TITLE:
        return state.map((post) => {
            if (post.id === action.id) {
                return { ...post, title: action.title };
            }
            return post;
        });
    case SET_POST_DATE:
        return state.map((post) => {
            if (post.id === action.id) {
                return { ...post, date: action.date };
            }
            return post;
        });
    case SET_POST_TEXT:
        return state.map((post) => {
            if (post.id === action.id) {
                return { ...post, text: action.text };
            }
            return post;
        });
    case DELETE_POST:
        return state.filter((post) => post.id !== action.id);
    case MOVE_POST:
        return reorder(state, action.fromIndex, action.toIndex);
        // return state.map((post) => {
        //     // TODO change this so that indexes don't grow rapidly
        //     if (post.id === action.id) {
        //         return { ...post, index: action.index };
        //     }
        //     if (post.index >= action.index) {
        //         return { ...post, index: post.index + 1 };
        //     }
        //     return post;
        // });
    default:
        return state;
    }
}

export function dialog(state = initialState.dialog, action = '') {
    switch (action.type) {
    case OPEN_DIALOG:
        return {
            isOpen: true,
            id: action.id,
            label: action.label,
            text: action.text,
        };
    case CLOSE_DIALOG:
        return initialState.dialog;
    default:
        return state;
    }
}

const blog = combineReducers({
    title,
    description,
    posts,
    dialog,
});

export default blog;
