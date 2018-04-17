export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

export const fetchPostsAction = threadId => ({
    type: FETCH_POSTS,
    payload: threadId
});

export const fetchPostsSuccessAction = result => ({
    type: FETCH_POSTS_SUCCESS,
    payload: result
});

export const fetchPostsFailedAction = error => ({
    type: FETCH_POSTS_FAILED,
    payload: error
});