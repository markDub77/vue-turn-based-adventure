<template>
  <div id="app">
    <HeroStatus />
    <div class="battle-console">
      <ul class="battle-console__list">
        <li
          class="battle-console__item"
          v-for="(item, i) in battleConsole"
          :key="`${i}-${item}`"
        >{{ item }}</li>
      </ul>
    </div>
    <HeroActions />
  </div>
</template>

<script>
import HeroActions from "./components/HeroActions.vue";
import HeroStatus from "./components/HeroStatus.vue";

export default {
  name: "App",
  components: {
    HeroActions,
    HeroStatus,
  },

  computed: {
    battleConsole() {
      return this.$store.state.battleConsole;
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  p {
    padding: 20px;
  }

  .battle-console {
    overflow: auto;
    height: 100vh;

    &.overflowing {
      display: flex;
      flex-direction: column-reverse;
    }

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      padding: 20px;
      border-bottom: 2px solid gray;
    }
  }
}
</style>
