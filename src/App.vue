<template>
  <div id="app">
    <HeroActions msg="some prop"/>
  </div>
</template>

<script>
import HeroActions from './components/HeroActions.vue'


export default {
  name: 'App',
  components: {
    HeroActions
  },
  data: function() {
    return {
      heroHealth: 100,
      heroRubies: 0,
      heroWeapons: ['sword'],
      heroPotion: 0,
      beginBattleText: [
        'A monster attacks you!',
        'You sneak up on a monster',
      ],
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      console.log('weee');
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
}
</style>
