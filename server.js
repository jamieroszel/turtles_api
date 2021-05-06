/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require('express')

/////////////////////////
// The Application Object
/////////////////////////
const app = express()

/////////////////////////
// Middleware
/////////////////////////
app.use(express.json())

/////////////////////////
// The Data
/////////////////////////
const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"}, 
]
/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    })
})

// Turtles Show Route (Send one turtle)
app.get('/turtles/:index', (req, res) => {
    // send turtle as json
    res.json(turtles[req.params.index])
})

// Turtles Index Route (Send All Turtles)
app.get("/turtles", (req, res) => {
    // send the turtles array as JSON
    res.json(turtles)
})

// Turtles Index Route (Send All Turtles)
app.post('/turtles', (req, res) => {
    // push the request body into the array
    turtles.push(req.body)
    // send the turtles array as JSON    
    res.json(turtles)
})

// Turtles Update Route
app.put('/turtles/:index', (req, res)=> {
    // replace the turtle at the specified index with the request body
    turtles[req.params.index] = req.body
    // send the turtles array as JSON
    res.json(turtles)
})

// Turtles Delete Route
app.delete('/turtles/:index', (req, res)=> {
    // replace the turtle at the specified index with the request body
    turtles.splice(req.params.index, 1)
    // send the turtles array as JSON
    res.json(turtles)
})

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, ()=> console.log("Listening on port 1337"))