# September 30th

# W 3 D 1 - Tiny App kickoff / Servers 101 / Amon Amarth

## WE WILL BE LEARNING ABOUT HTTP SERVERS

TCP

A ---------- B

FULL DUPLEX

HTTP

A ---------- B

Client -----> Server <------ Client

client REQUESTS
server RESPONDS


1 / 2 : httpserver
2 / 2 : Express


## Brainstorming

Nima ----------> Google
                    - information
                    - search results
                    - pictures
                    - HTML pages
                        - main
                        - search results
                        - about
                        - FAQ

HTTP: GET, POST, PUT, DELETE, ...

Nima says: 'I want to GET the "main page"'
Google says: 'Here ya go! <data>'
                - status code (200, 404, 500)
                - response data

### Server Side

- listen for GET requests to /main, the return "main.html"

```js
// server code
// some request
const listen = require('listen')

listen.on('GET', '/main', (response) => {
    response.send('main.html')
})
```


### Anatomy of an HTTP Request

PATH/URL: URL
METHOD: VERB
BODY: Maybe some data
HEADERS: extra stuff (any extra stuff)