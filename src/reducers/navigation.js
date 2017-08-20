import RootNav from '../routes'

export default (state, action) => {
    const newState = RootNav.router.getStateForAction(action, state)
    return newState || state
}