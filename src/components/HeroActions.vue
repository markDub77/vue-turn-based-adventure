<template>
  <div class="actions nes-container">
    <!-- <button class="actions__button nes-btn" @click="walk">Walk</button> -->
    <button class="actions__button nes-btn" @click="attack">Attack</button>
    <button class="actions__button nes-btn" @click="runAway">Run Away</button>
  </div>
</template>

<script>
export default {
  name: "HeroActions",
  data() {
    return {
      counter: 0,
      attackPossibilities: [
        {
          text: "You swing and miss!",
          damage: 0
        },
        {
          text: "You cut it's head off!",
          damage: 100
        },
        {
          text: "You have slain the beast!",
          damage: 100
        },
        {
          text: "You have hit the beast and injured it",
          damage: 50
        },
        {
          text: "You hit it and made it mad!",
          damage: 1
        }
      ]
    };
  },
  methods: {
    attack() {
      // get random number
      const randomPick = Math.floor(
        Math.random() * Object.keys(this.attackPossibilities).length
      );

      // there is some percent chance that you will miss
      // we need attack text
      var attack = Object.keys(this.attackPossibilities)[randomPick];
      var text = this.attackPossibilities[attack].text;
      var damage = this.attackPossibilities[attack].damage;

      this.$emit("changeMsg", { text: text, damage: damage });

      if (damage) {
        this.enemyHealth = this.enemyHealth + damage;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.console {
  color: #000;
}
.actions {
  font-family: "Press Start 2P", cursive;
  // margin: 0 auto;
  padding: 20px;
  width: 100%;
  margin: 0 auto !important;
  position: fixed;
  bottom: 0;
  background: #fff;

  &__button {
    width: 100%;
    margin-bottom: 20px;
  }

  &__weapon-select-label {
    color: #000000;
  }
}
</style>
