import Vue from 'vue';
import Vuex from 'vuex';
import enemiesStore from './modules/enemies';
import heroStore from './modules/hero';
import randomPick from '../utilities/utilities';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        hero: heroStore,
        enemy: enemiesStore
    },
    state: {
        busy: false,
        battleConsole: [],
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
    },

    getters: {
        battleConsole(state) {
            return state.battleConsole
        },
        busy(state) {
            return state.busy
        },
        getEnemyName(state) {
            return state.enemy.enemyName
        }
    },

    mutations: {
        updateBattleConsole: (state, { text }) => {
            state.battleConsole.push(text);
        },
        busy: (state, arg ) => {
            state.busy = state.busy = arg
        },
        setEnemy: (state) => {
            // coin flip to pick enemy
            const enemies = state.enemy.enemies;
            state.enemy.enemyName = Object.keys(enemies)[randomPick(enemies)];
        },
    },

    actions: {
        battleBegins: ({state, commit, getters}) => {
            const battleIntro = state.beginBattle

            commit('setEnemy')

            // coin flip to pick who goes first
            const index = Object.keys(battleIntro)[randomPick(battleIntro)];
            const text = battleIntro[index].text.replace(/%ENEMY%/gi, getters.getEnemyName);
            const damage = battleIntro[index].damage;

            commit('updateBattleConsole', {text})

            // math the health
            if (damage) {
                const text = `You lose ${damage} health`

                setTimeout(() => {
                    commit('updateBattleConsole', {text})
                    commit('hero/updateHeroHealth', {damage})
                }, 1000);
            }
        }
    }
});

export default store