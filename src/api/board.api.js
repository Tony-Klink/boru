export function apiFetchPosts(postId) {
    return fetch(`/abu/res/42375.json`).then(resp => resp.json()).then(obj => obj.threads[0].posts);
}