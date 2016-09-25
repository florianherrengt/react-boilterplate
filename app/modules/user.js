import api from '../utils/api';

export const GET_USER = 'GET_USER';

const initialState = {};

export function getUser() {
    return dispatch => api('session')
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: GET_USER,
                payload: data
            });
        });
}

export const actions = {
    getUser
}

const ACTION_HANDLERS = {
    [GET_USER]: (state, action) => action.payload
}

export default function userReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

