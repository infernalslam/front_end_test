// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
// export const incrementCounter = function ({ dispatch, state }) {
//   dispatch('INCREMENT', 1)
// }
export const stateAction = function ({ dispatch, state }, page) {
  dispatch('statePage', page)
}