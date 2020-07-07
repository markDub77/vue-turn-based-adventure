<template>
  <div id="app">
    <HeroStatus :heroHealth="heroHealth" />
    <div class="battle-console">
      <ul class="battle-console__list">
        <li
          class="battle-console__item"
          v-for="(item, i) in battleConsole"
          :key="`${i}-${item}`"
        >{{ item }}</li>
      </ul>
    </div>
    <HeroActions @heroActs="heroActs" />
  </div>
</template>

<script>
import HeroActions from "./components/HeroActions.vue";
import HeroStatus from "./components/HeroStatus.vue";
import data from "./data.js";

export default {
  name: "App",
  components: {
    HeroActions,
    HeroStatus
  },
  data: function() {
    return {
      data,
      heroHealth: data.heroHealth,
      battleConsole: data.battleConsole
    };
  },
  created: function() {
    this.battleBegins();
  },

  updated: function() {
    this.$nextTick(function() {
      // if you want to wait until the entire view has been re-rendered
      this.checkOverflow();
    });
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
      const battleIntro = this.data.battleData.beginBattle;
      const whoStarts = Object.keys(battleIntro)[this.randomPick(battleIntro)];

      var text = battleIntro[whoStarts].text;
      var damage = battleIntro[whoStarts].damage;

      this.battleConsole.push(text);

      if (damage) {
        setTimeout(() => {
          this.battleConsole.push(`You lose ${damage} health`);
          this.heroHealth = this.heroHealth - damage;
        }, 1000);
      }
    },
    heroActs() {
      const heroAttack = this.data.battleData.heroAttackPossibilities[
        this.randomPick(this.data.battleData.heroAttackPossibilities)
      ];

      this.battleConsole.push(heroAttack.text);

      setTimeout(() => {
        if (heroAttack.damage) {
          this.battleConsole.push(`Monster loses ${heroAttack.damage} health`);
          this.enemyHealth = this.enemyHealth - heroAttack.damage;
        }
        this.enemyActs();
      }, 1000);
    },
    enemyActs() {
      if (this.enemyHealth > 0) {
        const enemyAttack = this.data.battleData.enemyAttackPossibilities[
          this.randomPick(this.data.battleData.enemyAttackPossibilities)
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
      } else {
        setTimeout(() => {
          this.battleConsole.push(`The monster is dead. Check for loot.`);
        }, 1000);
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
