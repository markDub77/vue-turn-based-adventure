<template>
  <div class="actions nes-container">
    <button
      :disabled='busy'
      :class="[busy ? 'is-disabled' : '']"
      class="actions__button nes-btn"
      @click="heroAttacks"
    >Attack</button>

    <button
      v-if="heroSneakOption"
      :class="[busy ? 'is-disabled' : '']"
      class="actions__button nes-btn"
    >Sneak Away</button>

    <button
      v-if="heroDrinkPotionOption"
      :class="[busy ? 'is-disabled' : '']"
      class="actions__button nes-btn"
    >Drink Potion</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions('hero',['heroAttacks']),
  },

  computed: {
    ...mapGetters(['busy']),
    ...mapGetters('hero', ['heroSneakOption', 'heroAttackOption', 'heroDrinkPotionOption']),

  }
};
</script>

<style lang="scss" scoped>

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
