<template>
  <div class="actions nes-container">
    <button v-if="heroAttackOption" class="actions__button nes-btn" @click="heroAttacks">Attack</button>
    <button v-if="heroSneakOption" class="actions__button nes-btn">Sneak Away</button>
    <button v-if="heroDrinkPotionOption" class="actions__button nes-btn">Drink Potion</button>
  </div>
</template>

<script>
import { mapState,
  mapActions
} from 'vuex'

export default {
  methods: {
    ...mapActions([
        'heroAttacks'
    ]),
  },

  computed: {
    ...mapState({
      heroSneakOption: state => state.heroActions.heroSneakOption,
      heroAttackOption: state => state.heroActions.heroAttackOption,
      heroDrinkPotionOption: state => state.heroActions.heroDrinkPotionOption,
    })
  }
};
</script>

<style lang="scss" scoped>
.console {
  color: #000;
}
.actions {
  font-family: "Press Start 2P", cursive;
  padding: 20px;
  background: #fff;
  min-height: 240px;

  &__button {
    width: 100%;
    margin-bottom: 20px;
  }

  &__weapon-select-label {
    color: #000000;
  }
}
</style>
