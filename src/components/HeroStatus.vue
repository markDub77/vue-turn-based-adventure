<template>
  <div class="status nes-container">
    <p>Health: {{heroHealth}}%</p>
    <p>Rubies: {{rubies}}</p>
    <p>Potions: {{potions}}</p>
  </div>
</template>

<script>
export default {
  name: "HeroStatus",
  props: {
    heroHealth: Number
  },
  data() {
    return {
      rubies: 0,
      potions: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.status {
  padding: 20px;
  width: 100%;
  margin: 0 auto !important;
}
</style>
