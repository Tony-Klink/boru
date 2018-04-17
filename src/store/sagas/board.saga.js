import { put, call } from 'redux-saga/effects';
import { apiFetchPosts } from '../../api/board.api';
import * as fromActions from '../actions';

export function* fetchPosts(action) {
    console.log(action.payload);
    try {
        const posts = yield call(apiFetchPosts, action.payload);
        yield put(fromActions.fetchPostsSuccessAction(posts));
    } catch (e) {
        yield put(fromActions.fetchPostsFailedAction(e.message));
    }
} 