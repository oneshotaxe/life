export const state = () => ({
  drawer: false
})

export const mutations = {
  SET_DRAWER: (state, val) => {
    state.drawer = val
  }
}
