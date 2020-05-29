const INITIAL_STATE = {
  isSigningIn: false,
  isSignedIn : false,
  errors     : {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNING_IN":
      return {
        ...state,
        isSigningIn: true
      };
    case "SIGNED_IN":
      return {
        ...state,
        isSigningIn: false,
        isSignedIn : true,
        errors     : {}
      };
    case "SIGNED_IN_FAILED":
      return {
        ...state,
        isSigningIn: false,
        isSignedIn : false,
        errors     : action.payload.errors
      };
    case "SIGNED_OUT":
      return {
        ...state,
        isSigningIn: false,
        isSignedIn : false,
        errors     : {}
      };
    default:
      return state;
  }
};
