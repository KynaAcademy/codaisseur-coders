export function selectFeedLoading(reduxState) {
  return reduxState.feed.loading;
}

export const selectPosts = reduxState => reduxState.feed.posts;
