<template>
  <div class="battle-console">
    <ul class="battle-console__list">
      <li
        class="battle-console__item"
        v-for="(item, i) in battleConsole"
        :key="`${i}-${item}`"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {
  mapActions,
  // mapMutations
} from 'vuex'

export default {
  methods: {
    // ...mapMutations([
    //     'battleBegins'
    // ]),
    ...mapActions([
        'battleBegins'
    ]),

    checkOverflow() {
      const battleConsoleHeight = document.querySelector(".battle-console")
        .clientHeight;
      const battleConsoleListHeight = document.querySelector(
        ".battle-console__list"
      ).clientHeight;
      if (battleConsoleListHeight >= battleConsoleHeight) {
        document.querySelector(".battle-console").classList.add("overflowing");
      }
    }
  },

  computed: {
    battleConsole() {
      return this.$store.state.battleConsole;
    }
  },

  updated: function() {
    // if you want to wait until the entire view has been re-rendered
    this.$nextTick(function() {
      this.checkOverflow();
    });
  },

  created() {
    // the action way
    this.$store.dispatch('battleBegins')

    // the mutation way
    // this.battleBegins()
  },
};
</script>

<style lang="scss" scoped>
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
</style>
