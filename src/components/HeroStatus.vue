<template>
  <div class="status nes-container">
    <p>Health: {{ heroHealth }}%</p>
    <p>Rubies: {{ heroRubies }}</p>
    <p>Potions: {{ heroPotions }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  methods: {},
  computed: {
    ...mapState({
      heroHealth: state => state.heroStatus.heroHealth,
      heroRubies: state => state.heroStatus.heroRubies,
      heroPotions: state => state.heroStatus.heroPotions,
    }),
  }
};
</script>

<style lang="scss" scoped>
.status {
  padding: 20px;
  width: 100%;
  margin: 0 auto !important;
}
</style>
