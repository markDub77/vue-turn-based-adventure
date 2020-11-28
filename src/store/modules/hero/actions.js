import randomPick from '../../../utilities/utilities';

export default {
  heroAttacks: ({ state, commit, dispatch, rootGetters }) => {
    const attackPossibilities = state.heroAttackPossibilities;
    const attack = attackPossibilities[randomPick(attackPossibilities)];
    const text = attack.text.replace(/%ENEMY%/gi, rootGetters.getEnemyName);

    commit('busy',  true, { root: true })

    setTimeout(() => {
        commit('updateBattleConsole', {text}, { root: true })
    }, 1000)

    // health
    if (attack.damage) {
        const text = `${rootGetters.getEnemyName} loses ${attack.damage} health`
        setTimeout(() => {
            commit('updateBattleConsole', {text}, { root: true })
            commit('enemy/updateEnemyHealth', {text}, { root: true })
        }, 2000)
    }

    setTimeout(() => {
        // dispatch('enemyAttacks', null, { root: true });
        dispatch('enemy/enemyAttacks', null, { root: true });
    }, 3000)
  },
};