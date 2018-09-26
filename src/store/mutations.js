import types from './mutation-types'
const mutations = {
  [types.ADD_PURCHASE](state, list) {
    state.shopCarList = list
  },
  [types.changeDetail](state, id) {
    state.putAwayIdstore = id
  }
}
export default mutations