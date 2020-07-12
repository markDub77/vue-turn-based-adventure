const data = {
    heroHealth: 100,
    heroRubies: 0,
    heroWeapons: ["sword"],
    heroPotion: 0,
    battleConsole: [],
    enemies: {
        Orc: {
            enemyHealth: 100,
            rubies: 20
        },
        Troll: {
            enemyHealth: 100,
            rubies: 10
        },
        Moblin: {
            enemyHealth: 100,
            rubies: 10
        },
        Goriya: {
            enemyHealth: 10,
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
}

export default data;