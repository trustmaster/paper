import store from './store';
import initialState from './initial';
import { createPost, generateId } from './actions';

describe('store', () => {
    it('should dispatch actions', (done) => {
        expect(store.getState()).toEqual(initialState);
        const initLen = initialState.posts.length;

        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            expect(state.posts).toHaveLength(initLen + 1);
            done();
        });
        store.dispatch(createPost(generateId(6), new Date()));
        unsubscribe();
    });
});
