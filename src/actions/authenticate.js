import { LOGIN, LOGOUT } from '../constants'

export const loginSuccess = (user) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: user
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Authorized',
                })
            ],
        });
        dispatch(resetNavigator);
    };
};