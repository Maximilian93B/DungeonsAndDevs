const express = require ("express")
const app = express()

const port = process.env.PORT | 3303

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Welcome to Dungeons and Devs")
})

app.listen(port, ()=> {
    console.log("A Dragon Has AWAKENED on ${port}")
});


