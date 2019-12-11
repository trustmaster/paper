// Action types

export const SET_TITLE = 'SET_TITLE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const CREATE_POST = 'CREATE_POST';
export const SET_POST_TITLE = 'SET_POST_TITLE';
export const SET_POST_DATE = 'SET_POST_DATE';
export const SET_POST_TEXT = 'SET_POST_TEXT';
export const DELETE_POST = 'DELETE_POST';
export const MOVE_POST = 'MOVE_POST';

// Action creators

export function setTitle(title) {
    return { type: SET_TITLE, title };
}

export function setDescription(description) {
    return { type: SET_DESCRIPTION, description };
}

export function createPost(id, date) {
    return { type: CREATE_POST, id, date };
}

export function setPostTitle(id, title) {
    return { type: SET_POST_TITLE, id, title };
}

export function setPostDate(id, date) {
    return { type: SET_POST_DATE, id, date };
}

export function setPostText(id, text) {
    return { type: SET_POST_TEXT, id, text };
}

export function deletePost(id) {
    return { type: DELETE_POST, id };
}

export function movePost(id, index) {
    return { type: MOVE_POST, id, index };
}

export function generateId(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    let res = '';
    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return res;
}
