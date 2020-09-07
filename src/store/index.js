import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        heroHealth: 100,
        heroRubies: 50,
        heroPotions: 3,
        heroWeapons: ["sword"],
        heroSneakOption: '',
        heroWalkOption: '',
        heroRunOption: '',
        heroAttackOption: '',
        battleConsole: [],
        enemies: {
            Orc: {
                enemyHealth: 50,
                rubies: 10
            },
            Troll: {
                enemyHealth: 90,
                rubies: 20
            },
            Moblin: {
                enemyHealth: 95,
                rubies: 25
            },
            Goriya: {
                enemyHealth: 100,
                rubies: 30
            }
        },
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
            //   text: "You have slain the beast!",
            //   damage: 100
            // },
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
    getters: {
        tripleCounter: state => {
            return state.counter * 3;
        }
    },
    //mutating the state
    //mutations are always synchronous
    mutations: {
        //showing passed with payload, represented as num
        increment: (state, num) => {
            state.counter += num;
        },
        heroDamage: (state, num) => {
            state.heroHealth - num;
        }
    },
    //commits the mutation, it's asynchronous
    actions: {
        // showing passed with payload, represented as asynchNum (an object)
        asyncDecrement: ({ commit }, asyncNum) => {
            setTimeout(() => {
            //the asyncNum objects could also just be static amounts
            commit('decrement', asyncNum.by);
            }, asyncNum.duration);
        }
    }
});
