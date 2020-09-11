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

  data: () => {
    return {
      battleConsole: [],
    };
  },

  created: function() {
    this.battleBegins();
  },

  updated: function() {
    // if you want to wait until the entire view has been re-rendered
    this.$nextTick(function() {
      this.checkOverflow();
    });
  },

  computed: {
  },

  methods: {
    randomPick(obj) {
      return Math.floor(Math.random() * Object.keys(obj).length);
    },

    checkOverflow() {
      const battleConsoleHeight = document.querySelector(".battle-console")
        .clientHeight;
      const battleConsoleListHeight = document.querySelector(
        ".battle-console__list"
      ).clientHeight;

      if (battleConsoleListHeight >= battleConsoleHeight) {
        document.querySelector(".battle-console").classList.add("overflowing");
      }
    },

    battleBegins() {
      const battleIntro = this.$store.state.beginBattle;
      const enemies = this.$store.state.enemies;

      // coin flip to pick enemy
      this.enemy = Object.keys(enemies)[this.randomPick(enemies)];

      // coin flip to pick who goes first
      const index = Object.keys(battleIntro)[this.randomPick(battleIntro)];

      const text = battleIntro[index].text.replace(/%ENEMY%/gi, this.enemy);

      const damage = battleIntro[index].damage;

      // set state
      this.heroSneakOption = battleIntro[index].heroSneakOption;

      // output to console
      this.battleConsole.push(text);

      // math the health
      if (damage) {
        // set state
        this.heroAttackOption = false;

        setTimeout(() => {
          this.battleConsole.push(`You lose ${damage} health`);
          // this.heroHealth = this.heroHealth - damage;
          this.$store.dispatch("heroDamage", damage);
        }, 1000);
      }

      // set state
      this.heroAttackOption = true;
    },

    enemyActs() {
      if (this.enemyHealth > 0) {
        const enemyAttack = this.$store.state.enemyAttackPossibilities[
          this.randomPick(this.$store.state.enemyAttackPossibilities)
        ];

        this.battleConsole.push(enemyAttack.text);

        if (enemyAttack.damage) {
          setTimeout(() => {
            this.heroHealth = this.heroHealth - enemyAttack.damage;
            setTimeout(() => {
              this.battleConsole.push(`You lose ${enemyAttack.damage} health`);
            }, 1000);
          }, 1000);
        }
      }
    }
  }
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
