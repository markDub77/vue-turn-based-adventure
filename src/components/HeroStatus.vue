<template>
  <div class="status nes-container">
    <p>Health: {{heroHealth}}%</p>
    <p>Rubies: {{heroRubies}}</p>
    <p>Potions: {{heroPotions}}</p>
  </div>
</template>

<script>
export default {
  name: "HeroStatus",
  methods: {},
  computed: {
    heroHealth() {
      return this.$store.state.heroHealth
    },
    heroRubies() {
      return this.$store.state.heroRubies
    },
    heroPotions() {
      return this.$store.state.heroPotions
    }
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
