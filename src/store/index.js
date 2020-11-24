import Vue from 'vue';
import Vuex from 'vuex';
import enemiesStore from './modules/enemies';
import heroStore from './modules/hero';

Vue.use(Vuex);

function randomPick(obj) {
    return Math.floor(Math.random() * Object.keys(obj).length);
}

export default new Vuex.Store({
    modules: {
        hero: heroStore,
        enemy: enemiesStore
    },
    state: {
        enemyName: '',
        battleConsole: [],
        heroAttackOption: true,
        beginBattle: {
            heroStarts: {
                text: "You sneak up on a %ENEMY%. What do you want to do?",
                heroSneakOption: true
            },
            enemyStarts: {
                text: "A %ENEMY% attacks you!",
                damage: 1
            }
        },
        enemyAttackPossibilities: [
            {
                text: "The %ENEMY% swings and misses!"
            },
            {
                text: "The %ENEMY% has hit you and injured you",
                damage: 1
            }
        ],
        heroAttackPossibilities: [
            {
            text: "You swing and miss!",
            damage: 0
            },
            // {
            //   text: "You cut it's head off!",
            //   damage: 100
            // },
            // {
            //   text: "You have slain the %ENEMY%!",
            //   damage: 100
            // },
            {
            text: "You have hit the %ENEMY% and injured it",
            damage: 5
            },
            {
            text: "You hit the %ENEMY% and made it mad!",
            damage: 1
            },
        ]
    },
    //showing things, not mutating state
    //only needed if making computations for multiple components
    getters: {
    },
    //mutating the state
    //mutations are always synchronous
    mutations: {
        updateBattleConsole: (state, { text }) => {
            state.battleConsole.push(text);
        },

        updateHeroHealth: (state, { damage }) => {
            heroStore.state.heroHealth = heroStore.state.heroHealth - damage
        },

        updateEnemyHealth: (state, { damage }) => {
            enemiesStore.state.enemies[state.enemyName].enemyHealth = enemiesStore.state.enemies[state.enemyName].enemyHealth - damage
        }
    },
    // commits the mutation, it's asynchronous
    actions: {
        battleBegins: ({state, commit}) => {
            const enemies = enemiesStore.state.enemies;
            const battleIntro = state.beginBattle

            // coin flip to pick enemy
            state.enemyName = Object.keys(enemies)[randomPick(enemies)];

            // coin flip to pick who goes first
            const index = Object.keys(battleIntro)[randomPick(battleIntro)];
            const text = battleIntro[index].text.replace(/%ENEMY%/gi, state.enemyName);
            const damage = battleIntro[index].damage;

            commit('updateBattleConsole', {text})

            // math the health
            if (damage) {
                const text = `You lose ${damage} health`

                setTimeout(() => {
                    commit('updateBattleConsole', {text})
                    commit('updateHeroHealth', {damage})
                }, 1000);
            }
        },

        heroAttacks: ({ state, commit, dispatch }) => {
            const attackPossibilities = state.heroAttackPossibilities;
            const attack = attackPossibilities[randomPick(attackPossibilities)];
            const text = attack.text.replace(/%ENEMY%/gi, state.enemyName);

            setTimeout(() => {
                commit('updateBattleConsole', {
                    text
                })
            }, 1000)

            // health
            if (attack.damage) {
                const text = `${state.enemyName} loses ${attack.damage} health`
                setTimeout(() => {
                    commit('updateBattleConsole', {text})
                    commit('updateEnemyHealth', {text})
                }, 2000)
            }

            setTimeout(() => {
                dispatch('enemyAttacks');
            }, 3000)
        },

        enemyAttacks: ({ commit, state }) => {
            // the enemy is alrady selected, and may already have some damage.
            const attacks = enemiesStore.state.enemies[state.enemyName].attacks

            // coin flip to pick the attack
            const index = Object.keys(attacks)[randomPick(attacks)];

            const text = attacks[index].text;
            const damage = attacks[index].damage;

            commit('updateBattleConsole', {text})

            if (damage) {
                const text = `You lose ${damage} health`
                setTimeout(() => {
                    commit('updateBattleConsole', {text})
                    commit('updateHeroHealth', {damage})
                }, 1000)
            }
        },
    }
});
