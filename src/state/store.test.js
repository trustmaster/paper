import { store } from "./store";
import { initialState } from "./reducers";
import { createPost, generateId } from "./actions";

describe('store', () => {
    it('should dispatch actions', (done) => {
        expect(store.getState()).toEqual(initialState);

        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            expect(state.posts).toHaveLength(1);
            done();
        });
        store.dispatch(createPost(generateId(6), new Date()));
        unsubscribe();
    });
});
