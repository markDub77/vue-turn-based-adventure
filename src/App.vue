<template>
  <div id="app">
    <HeroStatus :heroHealth="heroHealth" />
    <ul class="battleConsole">
      <li class="battleConsole__item" v-for="item in battleText" v-bind:key="item">{{ item }}</li>
    </ul>
    <HeroActions @finished="finished" />
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
    },
    finished() {
      this.parentmessage = "sldkfljsadlfkj";
      this.battleText.push("sldkfljsadlfkj");
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

    &__item {
      padding: 20px;
      // background: gray;
      border-bottom: 2px solid gray;
    }
  }
}
</style>
