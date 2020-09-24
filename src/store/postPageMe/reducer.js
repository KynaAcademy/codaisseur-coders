const initalState = {
  loading: true,
  post: null,
  comments: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case "POST_FETCHED": {
      // our action and payload
      console.log("in the reducer!", action.payload);
      // need to return a new state
      return {
        ...state,
        loading: false,
        post: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}
