<template>
  <div id="app">
    <HeroStatus />
    <BattleConsole />
    <HeroActions />
  </div>
</template>

<script>
import HeroActions from "./components/HeroActions.vue";
import BattleConsole from "./components/BattleConsole.vue";
import HeroStatus from "./components/HeroStatus.vue";

export default {
  name: "App",
  components: {
    HeroActions,
    HeroStatus,
    BattleConsole
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
}
</style>
