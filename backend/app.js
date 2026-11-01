import express from "express";
import cors from "cors";
import router from "./routes/authRoutes.js";
const app=express();
// middleware call 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get("/",(req,resp)=>{
    resp.send("<h1>Server is Working</h1>");
})

app.use("/api/user",router);

export default app;