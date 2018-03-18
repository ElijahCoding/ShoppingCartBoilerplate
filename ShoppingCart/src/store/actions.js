export const flashMessage = ({ commit }, message) => {
  commit('setMessage', message)

  setTimeout(() => {
    commit('clearMessage')
  }, 3000)
}
