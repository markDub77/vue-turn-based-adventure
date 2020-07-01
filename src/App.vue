<template>
  <div id="app">
    <HeroStatus :heroHealth="heroHealth" />
    <div class="battle-console">
      <ul class="battle-console__list">
        <li class="battle-console__item" v-for="item in battleText" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>
    <HeroActions @changeMsg="heroActs" />
  </div>
</template>

<script>
import HeroActions from "./components/HeroActions.vue";
import HeroStatus from "./components/HeroStatus.vue";

export default {
  name: "App",
  components: {
    HeroActions,
    HeroStatus
  },
  data: function() {
    return {
      heroHealth: 100,
      enemyHealth: 100,
      heroRubies: 0,
      heroWeapons: ["sword"],
      heroPotion: 0,
      battleText: [],
      beginBattleText: {
        youStart: {
          text: "You sneak up on a monster. What do you want to do?"
        },
        theyStart: {
          text: "A monster attacks you!",
          damage: 1
        }
      },
      enemyAttackPossibilities: [
        {
          text: "The monster swings and misses!",
          damage: 0
        },
        {
          text: "The monster has hit you and injured you",
          damage: 1
        }
      ]
    };
  },
  created: function() {
    this.getBeginBattleText();
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
        console.log("overflow is happening");
        console.log("battleConsoleHeight", battleConsoleHeight);
        console.log("battleConsoleListHeight", battleConsoleListHeight);
        document.querySelector(".battle-console").classList.add("overflowing");
      }
    },
    getBeginBattleText: function() {
      const battleIntro = this.beginBattleText;

      // get random number
      const randomPick = Math.floor(
        Math.random() * Object.keys(battleIntro).length
      );

      var whoStarts = Object.keys(battleIntro)[randomPick];
      var text = battleIntro[whoStarts].text;
      var damage = battleIntro[whoStarts].damage;

      if (text) {
        setTimeout(() => {
          this.battleText.push(text);
        }, 1000);
      }

      if (damage) {
        setTimeout(() => {
          this.heroHealth = this.heroHealth - damage;
          setTimeout(() => {
            this.battleText.push(`You lose ${damage} health`);
          }, 1000);
        }, 1000);
      }
    },
    heroActs(msg) {
      this.battleText.push(msg.text);
      setTimeout(() => {
        this.battleText.push(`Monster loses ${msg.damage} health`);
        this.enemyHealth = this.enemyHealth - msg.damage;
        this.checkOverflow();
        this.enemyActs();
      }, 1000);
    },
    enemyActs() {
      if (this.enemyHealth > 0) {
        const enemyAttack = this.enemyAttackPossibilities[
          this.randomPick(this.enemyAttackPossibilities)
        ];

        this.battleText.push(enemyAttack.text);

        if (enemyAttack.damage) {
          setTimeout(() => {
            this.heroHealth = this.heroHealth - enemyAttack.damage;
            setTimeout(() => {
            this.battleText.push(`You lose ${enemyAttack.damage} health`);
            }, 1000);
          }, 1000);
        }
      } else {
        setTimeout(() => {
          this.battleText.push(`The monster is dead. Check for loot.`);
        }, 1000);
      }
    },
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
