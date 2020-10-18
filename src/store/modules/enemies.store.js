export default {
  namespaced: true,

  state: {
    enemies : {
      Orc: {
        enemyHealth: 50,
        rubies: 10,
        attacks: {
          hit: {
            text: 'The Orc hit you slightly',
            damage: 1
          },
          // miss: {
          //   text: 'The Orc swung and missed',
          //   damage: 0
          // }
        }
      },
      // Troll: {
      //     enemyHealth: 90,
      //     rubies: 20
      // },
      // Moblin: {
      //     enemyHealth: 95,
      //     rubies: 25
      // },
      // Goriya: {
      //     enemyHealth: 100,
      //     rubies: 30
      // }
    }
  }
}