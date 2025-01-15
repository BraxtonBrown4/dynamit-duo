export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        },
        {
            id: 3,
            name: "Knock-Off-Guy",
            power: "Punching really hard"
        },
        {
            id: 4,
            name: "PortalMcgee",
            power: "Portals"
        }
    ],



    villains: [
        {
            id: 1,
            name: "Dr.Doom",
            power: "Magic"
        },
        {
            id: 2,
            name: "Dr.Boom",
            power: "Bombs"
        },
        {
            id: 3,
            name: "Professor Magnet",
            power: "Controles wood"
        },
        {
            id: 4,
            name: "Nes",
            power: "Pika fire"
        },
    ]
}

const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export { getVillains, getHeroes }