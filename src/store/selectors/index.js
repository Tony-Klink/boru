import { createSelector } from 'reselect';


const postList = (state) => state.board.posts;

export const postListSelector = createSelector([postList], list => list);