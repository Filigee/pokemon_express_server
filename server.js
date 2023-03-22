const express = require("express")
const app = express()
const PORT = 8000

const pokemon = {
    "charmander": {
        "special move": "flamethrower",
        "health": 3,
        "damage": 1
    },
    "squirtle": {
        "special move": "water jets",
        "health": 3,
        "damage": 1
    },
    "bulbasaur": {
        "special move": "leaf cut",
        "health": 3,
        "damage": 1
    },
    "unknown": {
        "unknown": 404
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:pokemon", (req, res) => {
    const pokemon_name = req.params.pokemon.toLowerCase()
    if(pokemon[pokemon_name]){
        console.log(pokemon[pokemon_name])
        res.json(pokemon[pokemon_name])
    }
    else{
        res.json(pokemon["unknown"])
    }
})

app.listen(PORT, () => {
    console.log("Listening on port 8000")
})