export const signIn = (userProfile) => {
  return {
    type: "SIGN_IN",
    payload: userProfile,
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
