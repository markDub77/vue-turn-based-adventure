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
    <HeroActions
      :heroAttackOption="heroAttackOption"
      :heroSneakOption="heroSneakOption"
      :heroWalkOption="heroWalkOption"
      :heroRunOption="heroRunOption"
      @heroAttacks="heroAttacks"
    />
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
      battleConsole: data.battleConsole,
      heroAttackOption: false,
      heroSneakOption: false,
      heroWalkOption: false,
      heroRunOption: false
    };
  },
  created: function() {
    this.battleConsole = [];
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
      const battleIntro = this.data.beginBattle;
      const enemies = this.data.enemies;

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
          this.heroHealth = this.heroHealth - damage;
        }, 1000);
      }

      // set state
      this.heroAttackOption = true;
    },
    heroAttacks() {
      const heroAttackPossibilities = this.data.heroAttackPossibilities;
      const index = this.randomPick(heroAttackPossibilities);
      const heroAttack = heroAttackPossibilities[index];
      let enemyHealth = this.data.enemies[this.enemy].enemyHealth;

      // set state
      this.heroAttackOption = false;

      // get text from data and string replace the name
      const text = heroAttack.text.replace(/%ENEMY%/gi, this.enemy);

      // output to console
      this.battleConsole.push(text);

      setTimeout(() => {
        if (heroAttack.damage) {
          console.log("heroAttack.damage", heroAttack.damage);
          if (heroAttack.damage < 100) {
            console.log("heroAttack.damage2", heroAttack.damage);
            this.battleConsole.push(
              `${this.enemy} loses ${heroAttack.damage} health`
            );
          }
          enemyHealth = enemyHealth - heroAttack.damage;
          console.log("enemyHealth", enemyHealth);
        }
        if (enemyHealth <= 0) {
          setTimeout(() => {
            this.battleConsole.push(
              `The ${this.enemy} is dead. You check for loot.`
            );
          }, 1000);
        } else {
          this.enemyActs();
        }
      }, 1000);

      // set state
      this.heroAttackOption = true;
    },
    enemyActs() {
      if (this.enemyHealth > 0) {
        const enemyAttack = this.data.enemyAttackPossibilities[
          this.randomPick(this.data.enemyAttackPossibilities)
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
