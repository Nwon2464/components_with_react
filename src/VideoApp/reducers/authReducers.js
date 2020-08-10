const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userImage: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.getId(),
        userImage: action.payload.getImageUrl(),
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userImage: null };

    default:
      return state;
  }
};
