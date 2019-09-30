const http = require('http')

// spawns a server that isn't listening yet
const server = http.createServer((request, response) => {
    console.log('PING!')
    console.log(request.url)
    response.statusCode = 418
    console.log(request.method)

    if (request.url === '/thor' && request.method === 'GET') {
        response.end('<h1>THOR!</h1><img src="https://i.pinimg.com/originals/ef/13/a2/ef13a2dd35fb5b388a08b427b9b32f30.jpg" />')
    } else if (request.url === '/thor' && request.method === 'DELETE') {
        response.end('<h1 style="color: red">NO ONE DELETES THOR</h1>')
    } else if (request.url === '/freya') {
        response.end('FREYA!')
    } else {
        response.end('YAAARRR')
    }

})


// console.log(server)
server.listen(3000, () => {
    console.log('Ayo! Listening on 3000')
})