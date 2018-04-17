import { takeLatest } from 'redux-saga/effects';
import * as fromActions from '../actions';
import { fetchPosts } from './board.saga';

function* fetchPostsDispatched() {
    yield takeLatest(fromActions.FETCH_POSTS, fetchPosts)
}

export default fetchPostsDispatched;