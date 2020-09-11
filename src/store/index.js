import Vue from 'vue';
import Vuex from 'vuex';
import heroStatus from './modules/heroStatus.store';
import heroActions from './modules/heroActions.store';
import enemies from './modules/enemies.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        heroStatus,
        heroActions,
        enemies
    },
    state: {
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
    getters: {
        // tripleCounter: state => {
        //     return state.counter * 3;
        // }
    },
    //mutating the state
    //mutations are always synchronous
    mutations: {
        //showing passed with payload, represented as num
        // increment: (state, num) => {
        //     state.counter += num;
        // },
        heroAttacks: () => {
        //     state.heroHealth - num;
            console.log('Hi!')
            // state.obj.message = message
        },
    },
    //commits the mutation, it's asynchronous
    actions: {
        // heroDamage (context) {
        //     context.commit('heroDamage')
        // }
    },

    // heroAttacks() {
        // console.log('heroAttacks!')
        // const heroAttackPossibilities = this.$store.state.heroAttackPossibilities;
        // const index = this.randomPick(heroAttackPossibilities);
        // const heroAttack = heroAttackPossibilities[index];
        // let enemyHealth = this.$store.state.enemies[this.enemy].enemyHealth;

        // // set state
        // this.heroAttackOption = false;

        // // get text from data and string replace the name
        // const text = heroAttack.text.replace(/%ENEMY%/gi, this.enemy);

        // // output to console
        // this.battleConsole.push(text);

        // setTimeout(() => {
        //   if (heroAttack.damage) {
        //     console.log("heroAttack.damage", heroAttack.damage);
        //     if (heroAttack.damage < 100) {
        //       console.log("heroAttack.damage2", heroAttack.damage);
        //       this.battleConsole.push(
        //         `${this.enemy} loses ${heroAttack.damage} health`
        //       );
        //     }
        //     enemyHealth = enemyHealth - heroAttack.damage;
        //     console.log("enemyHealth", enemyHealth);
        //   }
        //   if (enemyHealth <= 0) {
        //     setTimeout(() => {
        //       this.battleConsole.push(
        //         `The ${this.enemy} is dead. You check for loot.`
        //       );
        //     }, 1000);
        //   } else {
        //     this.enemyActs();
        //   }
        // }, 1000);

        // // set state
        // this.heroAttackOption = true;
    // },
});
