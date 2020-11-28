export default {
  updateEnemyHealth: (state, { damage }) => {
    state.enemies[state.enemyName].enemyHealth = state.enemies[state.enemyName].enemyHealth - damage
  }
};