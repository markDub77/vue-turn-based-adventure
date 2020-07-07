<template>
  <div class="actions nes-container">
    <!-- <button class="actions__button nes-btn" @click="walk">Walk</button> -->
    <button class="actions__button nes-btn" @click="attack">Attack</button>
    <!-- <button class="actions__button nes-btn" @click="runAway">Run Away</button> -->
  </div>
</template>

<script>
export default {
  name: "HeroActions",
  methods: {
    attack() {
      this.$emit("heroActs");
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

  &__button {
    width: 100%;
    margin-bottom: 20px;
  }

  &__weapon-select-label {
    color: #000000;
  }
}
</style>
