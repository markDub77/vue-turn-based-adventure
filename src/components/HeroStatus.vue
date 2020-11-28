<template>
  <div class="status nes-container">
    <p>Health: {{ heroHealth }}%</p>
    <p>Rubies: {{ heroRubies }}</p>
    <p>Potions: {{ heroPotions }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('hero', ['heroHealth','heroRubies','heroPotions'])
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
