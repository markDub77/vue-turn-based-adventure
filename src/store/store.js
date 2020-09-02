import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        heroHealth: 100
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
