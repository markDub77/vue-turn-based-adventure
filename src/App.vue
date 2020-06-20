<template>
  <div id="app">
    <HeroStatus :heroHealth="heroHealth" />
    <ul>
      <li v-for="item in battleText" v-bind:key="item">{{ item }}</li>
    </ul>
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
    HeroStatus
  },
  data: function() {
    return {
      heroHealth: 100,
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
          health: -1
        }
      }
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
      var health = battleIntro[whoStarts].health;

      if (text) {
        // this.battleText = text;
        this.battleText.push(text);
      }

      if (health) {
        this.heroHealth = this.heroHealth + health;
      }

      // console.log(text, health);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  p {
    padding: 20px;
  }
}
</style>
