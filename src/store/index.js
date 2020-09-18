import Vue from 'vue';
import Vuex from 'vuex';
import enemiesStore from './modules/enemies.store';
import heroStatus from './modules/heroStatus.store';
import heroActions from './modules/heroActions.store';

Vue.use(Vuex);

function randomPick(obj) {
    return Math.floor(Math.random() * Object.keys(obj).length);
}

export default new Vuex.Store({
    modules: {
        heroStatus,
        heroActions,
        enemiesStore
    },
    state: {
        enemyName: '',
        enemyHealth: '',
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
              text: "You have slain the %ENEMY%!",
              damage: 100
            },
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
        battleBegins: state => {
            const enemies = enemiesStore.state.enemies;
            const battleIntro = state.beginBattle

            // coin flip to pick enemy
            state.enemyName = Object.keys(enemies)[randomPick(enemies)];

            // coin flip to pick who goes first
            const index = Object.keys(battleIntro)[randomPick(battleIntro)];

            const text = battleIntro[index].text.replace(/%ENEMY%/gi, state.enemyName);

            // set state
            // this.heroSneakOption = battleIntro[index].heroSneakOption;
            state.battleConsole.push(text);

            const damage = battleIntro[index].damage;

            // math the health
            if (damage) {
                // set state
                // this.heroAttackOption = false;
                setTimeout(() => {
                    state.battleConsole.push(`You lose ${damage} health`);
                    heroStatus.state.heroHealth = heroStatus.state.heroHealth - damage;
                    // this.$store.dispatch("heroDamage", damage);
                }, 1000);
            }
        },

        heroAttacks: (state, { text }) => {
            state.battleConsole.push(text);
        }
    },
    // commits the mutation, it's asynchronous
    actions: {
        heroAttacks: ({ state, commit }) => {
            const heroAttackPossibilities = state.heroAttackPossibilities;
            const heroAttack = heroAttackPossibilities[randomPick(heroAttackPossibilities)];
            const text = heroAttack.text.replace(/%ENEMY%/gi, state.enemyName);

            setTimeout(() => {
                commit('heroAttacks', {
                    text
                })
            }, 1000)

            if (heroAttack.damage) {
                if (heroAttack.damage < enemiesStore.state.enemies[state.enemyName].enemyHealth) {
                    const text = `${state.enemyName} loses ${heroAttack.damage} health`
                    setTimeout(() => {
                        commit('heroAttacks', {
                            text
                        })
                    }, 2000)
                }
                // enemyHealth = enemyHealth - heroAttack.damage;
              }
        },
    }
});
