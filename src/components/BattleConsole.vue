<template>
    <ul class="battle-console">
      <li
        class="battle-console__item"
        v-for="(item, i) in battleConsole"
        :key="`${i}-${item}`"
      >{{ item }}</li>
    </ul>
</template>

<script>
import {
  // mapActions,
  mapMutations
} from 'vuex'

export default {
  methods: {
    ...mapMutations([
        'battleBegins'
    ]),
    // ...mapActions([
    //     'battleBegins'
    // ]),
  },

  computed: {
    battleConsole() {
      return this.$store.state.battleConsole;
    }
  },

  created() {
    // the action way
    // this.$store.dispatch('battleBegins')

    // the mutation way
    this.battleBegins()
  },
};
</script>

<style lang="scss" scoped>
.console {
  color: #000;
}

.battle-console {
  overflow: auto;
  height: 100vh;
  list-style: none;
  padding: 0;
  margin: 0;

  &.overflowing {
    display: flex;
    flex-direction: column-reverse;
  }

  &__item {
    padding: 20px;
    border-bottom: 2px solid gray;
  }
}
</style>
