import express from "express";
import cors from "cors";

import Router from "./routes/routes.js"

const app = express();

app.use(express.json());

app.use(cors({
    origin : ["http://localhost:3000"],
    method : ["GET", "POST", "PATCH", "DELETE"],
    credentials : true
}))

app.use(cors({
    origin : ["http://localhost:3001"],
    method : ["GET", "POST", "PATCH", "DELETE"],
    credentials : true
}))

app.use("/API", Router);

app.get("/", (req, res)=>{
    res.send('At Home a game')
})



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));