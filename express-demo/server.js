const express = require('express')

// create a server
const app = express()

app.set('view engine', 'ejs')

// app.use((request, response) => {

//     if (request.url === '/thor' && request.method === 'GET') {
//         response.send('<h1>THOR!</h1><img src="https://i.pinimg.com/originals/ef/13/a2/ef13a2dd35fb5b388a08b427b9b32f30.jpg" />')
//     } else if (request.url === '/thor' && request.method === 'DELETE') {
//         response.send('<h1 style="color: red">NO ONE DELETES THOR</h1>')
//     } else if (request.url === '/freya') {
//         response.send('FREYA!')
//     } else {
//         response.send('YAAARRR')
//     }
// })

const gods = {
    thor: {
        name: 'Thor Odinsson',
        profession: 'Protector of mankind',
        skills: 'Thunder and lightning'
    },
    freya: {
        name: 'Freya',
        profession: 'Goddess associated with war, death, love',
        skills: 'Rides a chariot pulled by two cats'
    },
}

// dynamic routes
app.get('/', (req, res) => {
    // magic EJS stuff
    res.render('main')
})


app.get('/:godName', (req, res) => {
    const particularGod = gods[req.params.godName]
    
    console.log('params godName', req.params.godName)
    console.log('particularGod', particularGod)

    const templateVars = {
        particularGod: particularGod
    }

    // magic EJS stuff
    res.render('norseGod', templateVars)
})

app.get('/:godName/old', (req, res) => {
    const particularGod = gods[req.params.godName]
    console.log('params godName', req.params.godName)
    console.log('particularGod', particularGod)
    const page = `
        <div>
            <h1>${particularGod.name}</h1>
            <h2>${particularGod.profession}</h2>
            <h2>${particularGod.skills}</h2>
        </div>
    `
    res.send(page) 
})

// /thor/skills
// /freya/skills
app.get('/:godName/skills', (req, res) => {
    const particularGod = gods[req.params.godName]
    const page = `
        <div>
            <h2>${particularGod.skills}</h2>
        </div>
    `
    res.send(page) 
})

// listen
app.listen(3000, () => {
    console.log('Hello! I am listening on 3000')
})