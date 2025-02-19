import { getHeroes } from "./database.js";

const heroes = getHeroes()

export const heroList = () => {
    let heroHTML = '<ul>'

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += '</ul>'

    return heroHTML
}