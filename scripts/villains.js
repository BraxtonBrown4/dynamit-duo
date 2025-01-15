import { getVillains } from "./database.js"

const villains = getVillains()

export const villainList = () => {
    let villianHTML = '<ul>'

    for (const villian of villains) {
        villianHTML += `<li>${villian.name}</li>`
    }

    villianHTML += '</ul>'

    return villianHTML 
}