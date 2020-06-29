<template>
  <div id="app">
    <HeroStatus :heroHealth="heroHealth" />
    <ul class="battleConsole">
      <li class="battleConsole__item" v-for="item in battleText" v-bind:key="item">{{ item }}</li>
    </ul>
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
  methods: {
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
        this.battleText.push(text);
      }

      if (damage) {
        this.heroHealth = this.heroHealth - damage;
        this.battleText.push(`You lose ${damage} health`);
      }
    },
    heroActs(msg) {
      this.battleText.push(msg.text);
      this.battleText.push(`Monster loses ${msg.damage} health`);
      this.enemyHealth = this.enemyHealth - msg.damage;
      this.enemyActs();
    },
    randomPick(obj) {
      return Math.floor(Math.random() * Object.keys(obj).length);
    },
    enemyActs() {
      if (this.enemyHealth > 0) {
        const enemyAttack = this.enemyAttackPossibilities[
          this.randomPick(this.enemyAttackPossibilities)
        ];

        this.battleText.push(enemyAttack.text);

        if (enemyAttack.damage) {
          this.heroHealth = this.heroHealth - enemyAttack.damage;
          this.battleText.push(`You lose ${enemyAttack.damage} health`);
        }
      } else {
        this.battleText.push(`The monster is dead. Check for loot.`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  p {
    padding: 20px;
  }
  .battleConsole {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    height: calc(100vh - 314px);

    &__item {
      padding: 20px;
      // background: gray;
      border-bottom: 2px solid gray;
    }
  }
}
</style>
