import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,

  state: {
    heroSneakOption: false,
    heroWalkOption: true,
    heroRunOption: false,
    heroAttackOption: true,
    heroDrinkPotionOption: true,
    heroHealth: 100,
    heroRubies: 50,
    heroPotions: 3,
    heroWeapons: ["sword"],
  },
  mutations,
  actions,
  getters
}
