const data = {
    heroHealth: 100,
    enemyHealth: 100,
    heroRubies: 0,
    heroWeapons: ["sword"],
    heroPotion: 0,
    battleConsole: [],
    battleData: {
        beginBattle: {
            heroStarts: {
                text: "You sneak up on a monster. What do you want to do?"
            },
            enemyStarts: {
                text: "A monster attacks you!",
                damage: 1
            }
        },
        enemyAttackPossibilities: [
            {
                text: "The monster swings and misses!"
            },
            {
                text: "The monster has hit you and injured you",
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
              text: "You have hit the beast and injured it",
              damage: 50
            },
            {
              text: "You hit it and made it mad!",
              damage: 1
            }
        ]
    }
}

export default data;