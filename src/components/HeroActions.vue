<template>
  <div class="actions nes-container">
    <button v-if="heroAttackOption" class="actions__button nes-btn" @click="attack">Attack</button>
    <button v-if="heroSneakOption" class="actions__button nes-btn" @click="sneak">Sneak Away</button>
    <button v-if="heroWalkOption" class="actions__button nes-btn" @click="walk">Walk</button>
    <button v-if="heroRunOption" class="actions__button nes-btn" @click="run">Run</button>
  </div>
</template>

<script>
export default {
  name: "HeroActions",
  props: {
    heroSneakOption: Boolean,
    heroWalkOption: Boolean,
    heroRunOption: Boolean,
    heroAttackOption: Boolean
  },
  methods: {
    attack() {
      this.$emit("heroAttacks");
    }
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
