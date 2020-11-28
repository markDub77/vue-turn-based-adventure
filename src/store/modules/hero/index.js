import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,

  state: {
    heroAttackOption: true,
    heroDrinkPotionOption: true,
    heroSneakOption: true,
    heroWalkOption: true,
    heroRunOption: false,
    heroHealth: 100,
    heroRubies: 50,
    heroPotions: 3,
    heroWeapons: ["sword"],
    heroAttackPossibilities: [
      {
      text: "You swing and miss!",
      damage: 0
      },
      // {
      //   text: "You cut it's head off!",
      //   damage: 100
      // },
      // {
      //   text: "You have slain the %ENEMY%!",
      //   damage: 100
      // },
      {
      text: "You have hit the %ENEMY% and injured it",
      damage: 5
      },
      {
      text: "You hit the %ENEMY% and made it mad!",
      damage: 1
      },
  ]
  },
  mutations,
  actions,
  getters
}
