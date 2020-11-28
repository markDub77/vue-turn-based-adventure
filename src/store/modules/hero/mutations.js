export default {
  updateHeroHealth: (state, { damage }) => {
    state.heroHealth = state.heroHealth - damage
  },
  // setSneakOption (state, heroSneakOption) {
  //   //     // update products
  //   //     state.items = heroSneakOption
  //   //   },

  // }
}