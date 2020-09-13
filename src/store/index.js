import Vue from 'vue';
import Vuex from 'vuex';
import enemies from './modules/enemies.store';
import heroStatus from './modules/heroStatus.store';
import heroActions from './modules/heroActions.store';
// import randonPick from './helpers/randomPick';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        heroStatus,
        heroActions,
        enemies
    },
    state: {
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
            {
              text: "You cut it's head off!",
              damage: 100
            },
            {
              text: "You have slain the beast!",
              damage: 100
            },
            {
            text: "You have hit the %ENEMY% and injured it",
            damage: 5
            },
            {
            text: "You hit it and made it mad!",
            damage: 1
            },
        ]
    },
    //showing things, not mutating state
    //only needed if making computations for multiple components
    getters: {
        // heroAttacks: state => {
            // console.log('Hero Attacks! getter');
            // return state.battleConsole.push('Fake enemy loses 1000 health');
        // }
    },
    //mutating the state
    //mutations are always synchronous
    mutations: {
        heroAttacks: state => {
            state.battleConsole.push('Fake enemy loses 1000 health');
        }
    },
    //commits the mutation, it's asynchronous
    actions: {
        heroAttacks: ({ commit }) => {
            setTimeout(() => {
                commit('heroAttacks')
            }, 1000)
        }
    },
});
