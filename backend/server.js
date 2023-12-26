//mongodb+srv://nouhaila_danouni:wWZnBmvfW33zSJju@projects.t6jxa5t.mongodb.net/?retryWrites=true&w=majority
const express=require("express");// importer express
const app=express(); //démarrer express
const path=require("path");

const cors=require("cors");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const productrouter=require("./routes_server/products.routes");
const categoryRouter=require("./routes_server/categories.routes");
const loginRouter=require("./routes_server/login.routes");

const mongoose=require("mongoose");
const dotevn=require("dotenv");

dotevn.config()

mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(process.env.SERVER_PORT,()=>console.log("server running")))
.catch(err=>console.log(err));
app.use(cors());
app.use(express.json());
app.use("/products",productrouter);
app.use("/categories",categoryRouter);
app.use("/",loginRouter);


