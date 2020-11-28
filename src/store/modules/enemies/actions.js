import randomPick from '../../../utilities/utilities';

export default {
  enemyAttacks: ({ commit, state, rootGetters }) => {
    // the enemy is alrady selected, and may already have some damage.
    const attackPosabilities = state.enemies[rootGetters.getEnemyName].attacks

    // coin flip to pick the attack
    const index = Object.keys(attackPosabilities)[randomPick(attackPosabilities)];

    const text = attackPosabilities[index].text;
    const damage = attackPosabilities[index].damage;

    commit('updateBattleConsole', {text}, {root: true})

    if (damage) {
        const text = `You lose ${damage} health`
        setTimeout(() => {
            commit('updateBattleConsole', {text}, {root: true})
            commit('hero/updateHeroHealth', {damage}, {root: true})
            commit('busy',  false, { root: true })
        }, 1000)
    }
  }
};