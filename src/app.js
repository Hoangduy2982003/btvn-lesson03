import express from 'express'
import v1Router from "./routers/v1.router.js"
import v2Router from "./routers/v2.router.js"

const app = express();
app.use(express.static("public"))

app.use("/" , v1Router);
app.use("/" , v2Router);

app.use((req, res , next) => {
    console.log(">>>>>> App-Level Middleware 01");
    next();
})

app.get("/test" ,
    (req , res , next) => {
        console.log("Middleware 01");
        next();
    },
    (req , res , next) => {
        console.log("Middleware 02");
        next();
    },
    (req ,res) => {
        console.log("Handler");
        res.end("Handler")
    })

app.listen(3000,() =>{
    console.log(">>>>>> App is running on port 3000");
});