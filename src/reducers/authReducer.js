const INIT_STATE = {
	email: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { email: action.payload };
    default:
			return state;
  }
}