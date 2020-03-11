// src/store/postPage/selectors.js

export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments
      };
}
