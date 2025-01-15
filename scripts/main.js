import { heroList } from "./heroes.js"
import { villainList } from "./villains.js"

const heroListHTML = heroList()
const villainListHTML = villainList()

const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`

const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = theWholeEnchilada