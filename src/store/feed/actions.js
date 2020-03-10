export function startLoading() {
  return {
    type: "feed/startLoading"
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts
  };
}
