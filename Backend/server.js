import express from "express"
import cors from "cors"



// website 
const web = express()
const port = 5000

//middleware 
web.use(express.json())
web.use(cors())

web.get("/",(req, res)=>{
    res.send("API Working")
})

web.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb://localhost:27017/