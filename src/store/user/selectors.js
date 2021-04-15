export const userLoading = state => state.user.loading;

export const getUserName = state =>
  state.user.profile && state.user.profile.name;

// exported { userLoading, getUserName }
