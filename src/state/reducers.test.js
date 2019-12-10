import { title } from './reducers';
import { setTitle } from './actions';

describe('title reducer', () => {
    it('should set a title', () => {
        const state = 'Test title';
        const expected = 'New title';
        const result = title(state, setTitle(expected));
        expect(result).toEqual(expected);
    });
});