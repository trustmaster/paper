import {
    title, description, posts, dialog,
} from './reducers';
import {
    setTitle,
    setDescription,
    generateId,
    createPost,
    setPostTitle,
    setPostDate,
    setPostText,
    deletePost,
    movePost,
    openDialog,
    closeDialog,
} from './actions';
import initialState from './initial';

function generateRandPosts(len = 0) {
    const res = [];
    for (let i = 0; i < len; i += 1) {
        res.push({
            id: generateId(12),
            index: i + 1,
            title: generateId(24),
            date: new Date(),
            text: generateId(128),
        });
    }
    return res;
}

describe('title reducer', () => {
    it('should set a title', () => {
        const state = 'Test title';
        const expected = 'New title';
        const result = title(state, setTitle(expected));
        expect(result).toEqual(expected);
    });
});

describe('description reducer', () => {
    it('should set a description', () => {
        const state = 'Test description';
        const expected = 'New description';
        const result = description(state, setDescription(expected));
        expect(result).toEqual(expected);
    });
});

describe('posts reducer', () => {
    describe('on CREATE_POST action', () => {
        it('should add a post to an empty state', () => {
            const state = [];
            const id = generateId(12);
            const date = new Date();
            const post = {
                id,
                index: 1,
                title: '',
                date,
                text: '',
            };

            const action = createPost(id, date);
            const result = posts(state, action);

            expect(result).toEqual([post]);
        });

        it('should append a post to existing posts', () => {
            const state = generateRandPosts(5);
            const id = generateId(12);
            const date = new Date();
            const post = {
                id,
                index: state.length + 1,
                title: '',
                date,
                text: '',
            };

            const action = createPost(id, date);
            const result = posts(state, action);

            expect(result).toEqual([...state, post]);
        });
    });

    describe('on SET_POST_TITLE action', () => {
        it('should set a title of the post', () => {
            const id = generateId(12);
            const date = new Date();
            const post = {
                id,
                index: 3,
                title: '',
                date,
                text: '',
            };
            const state = [
                ...generateRandPosts(2),
                post,
                ...generateRandPosts(3),
            ];
            const expected = 'Test title';

            const action = setPostTitle(id, expected);
            const result = posts(state, action);

            expect(result[2].title).toEqual(expected);
        });
    });

    describe('on SET_POST_DATE action', () => {
        it('should set the date of the post', () => {
            const id = generateId(12);
            const date = new Date();
            const post = {
                id,
                index: 1,
                title: '',
                date,
                text: '',
            };
            const state = [
                ...generateRandPosts(2),
                post,
                ...generateRandPosts(3),
            ];
            const newDate = new Date('2019-12-01');

            const action = setPostDate(id, newDate);
            const result = posts(state, action);

            expect(result[2].date).toEqual(newDate);
        });
    });

    describe('on SET_POST_TEXT action', () => {
        it('should set the text of the post', () => {
            const id = generateId(12);
            const date = new Date();
            const post = {
                id,
                index: 1,
                title: '',
                date,
                text: '',
            };
            const state = [
                ...generateRandPosts(2),
                post,
                ...generateRandPosts(3),
            ];
            const text = '<p>This is the text</p>';

            const action = setPostText(id, text);
            const result = posts(state, action);

            expect(result[2].text).toEqual(text);
        });
    });

    describe('on DELETE_POST action', () => {
        it('should delete a post by id', () => {
            const postsBefore = generateRandPosts(3);
            const post = generateRandPosts(1)[0];
            const postsAfter = generateRandPosts(2);
            const state = [
                ...postsBefore,
                post,
                ...postsAfter,
            ];

            const action = deletePost(post.id);
            const result = posts(state, action);

            expect(result).toHaveLength(5);
            expect(result).toEqual([...postsBefore, ...postsAfter]);
        });
    });

    describe('on MOVE_POST action', () => {
        it('should change post indexes when moving up', () => {
            const state = generateRandPosts(8);
            const post = state[5];
            const indexes = [1, 2, 4, 5, 6, 3, 8, 9];

            const action = movePost(post.id, 3);
            const result = posts(state, action);

            expect(result).toHaveLength(state.length);
            expect(result[5].index).toEqual(3);
            result.forEach((item, i) => {
                expect(item.index).toEqual(indexes[i]);
            });
        });

        it('should change post indexes when moving down', () => {
            const state = generateRandPosts(8);
            const post = state[4];
            const indexes = [1, 2, 3, 4, 7, 6, 8, 9];

            const action = movePost(post.id, 7);
            const result = posts(state, action);

            expect(result).toHaveLength(state.length);
            expect(result[4].index).toEqual(7);
            result.forEach((item, i) => {
                expect(item.index).toEqual(indexes[i]);
            });
        });
    });
});

describe('dialog reducer', () => {
    describe('on OPEN_DIALOG action', () => {
        it('should set open dialog state', () => {
            const state = initialState.dialog;
            const expected = {
                isOpen: true,
                id: 123,
                label: 'Confirm removal',
                text: 'Do you really want to delete this?',
            };

            const action = openDialog(expected.id, expected.label, expected.text);
            const result = dialog(state, action);
            expect(result).toEqual(expected);
        });
    });
    describe('on CLOSE_DIALOG action', () => {
        it('should reset to initial closed dialog', () => {
            const state = {
                isOpen: true,
                id: 123,
                label: 'Confirm removal',
                text: 'Do you really want to delete this?',
            };
            const expected = initialState.dialog;

            const action = closeDialog(state.id, false);
            const result = dialog(state, action);
            expect(result).toEqual(expected);
        });
    });
});
