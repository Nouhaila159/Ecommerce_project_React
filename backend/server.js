//mongodb+srv://nouhaila_danouni:wWZnBmvfW33zSJju@projects.t6jxa5t.mongodb.net/?retryWrites=true&w=majority
const express=require("express");
const app=express();
const cors=require("cors");
const productrouter=require("./routes_server/products.routes");
const categoryrouter=require("./routes_server/categories.routes");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
//const url="mongodb+srv://nouhaila_danouni:wWZnBmvfW33zSJju@projects.t6jxa5t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(process.env.SERVER_PORT,()=>console.log("server running"))) //demarer le serveur
.catch(err=>console.log(err));
//************multi origin cross solution************* */
app.use(cors());
app.use(express.json());
app.use("/products",productrouter);
app.use("/categories",categoryrouter);



