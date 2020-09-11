export default {
  namespaced: true,

  state: {
    heroSneakOption: false,
    heroWalkOption: true,
    heroRunOption: false,
    heroAttackOption: true,
    heroDrinkPotionOption: true,
  },

  getters: {
  },
  mutations: {
    setSneakOption (state, heroSneakOption) {
      // update products
      state.items = heroSneakOption
    },

    decrementProductInventory (state, product) {
      product.inventory--
    }
  },
}

