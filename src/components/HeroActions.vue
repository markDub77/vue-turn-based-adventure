<template>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="actions nes-container is-rounded">
      <button class="actions__button nes-btn" @click="walk">Walk</button>
      <button class="actions__button nes-btn" @click="attack">Attack</button>

      <label class="actions__weapon-select-label" for="actions__weapon-select">Weapon</label>
      <div class="actions__weapon-select nes-select">
        <select required id="actions__weapon-select">
          <option value="" disabled selected hidden>Select...</option>
          <option value="0">Sword</option>
          <option value="1">Bow</option>
          <option value="2">Auto Bow</option>
        </select>
      </div>
    </div>
    <!-- {{ counter }} -->
</template>

<script>
export default {
  name: 'HeroActions',
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    walk() {
      this.counter = Math.ceil(Math.random() * 6)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.actions {
  font-family: 'Press Start 2P', cursive;
  margin: 0 auto;
  width: 400px;
  color: white;
  padding: 20px;
  resize: auto;
  overflow: auto;
  width: 300px;
  margin: 0 auto !important;

  &__button {
    width: 100%;
    margin-bottom: 20px;
  }

  &__weapon-select-label {
    color: #000000;
  }
}
</style>
