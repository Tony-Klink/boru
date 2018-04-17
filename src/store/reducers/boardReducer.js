import { FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS} from '../actions/board.actions';

const initialState = {
    posts: []
}

export const board = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS: {
            return Object.assign({}, state, {
                posts: action.payload
            })
        };
        default:
            return state; 
    };
}