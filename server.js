const express = require("express")
const app =express()
const userRoute = require("./Backend/routes/user")
const authRoute = require("./Backend/routes/auth")
const productRoute = require("./Backend/routes/ProductRoute")


const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB  connected!!"))
.catch((err)=>console.log("err"));

app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute)





app.listen( process.env.PORT,()=>{
console.log("my server is runing !!! ")
});