import { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock';
import userReducer, { getUser } from './user';
import config from '../config';

const mockStore = configureMockStore([thunk]);
describe('The user reducer', () => {
    afterEach(() => {
        nock.cleanAll()
    });
    it('should get and set the user', (done) => {
        const store = mockStore({ user: {} });
        const payload = { username: 'test' };
        var scope = nock(config.baseUrl + '/')
            .get('/api/session')
            .reply(200, payload);
        store.dispatch(getUser()).then((data) => {
            expect(store.getActions()[0].payload).to.deep.equal(payload);
            scope.done();
            done();
        });
    });
});

