export function apiFetchPosts(board, postId) {
    return fetch(`/${board}/res/${postId}.json`).then(resp => resp.json()).then(obj => obj.threads[0].posts);
}