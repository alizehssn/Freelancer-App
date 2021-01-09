const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3006;
const app = express();
app.use(morgan("combined"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static("./client/build"))
};
app.use(routes);
app.get("/", (req,res)=> {
    res.send("App is Alive!");
})
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/freelancer", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }, ()=> {console.log("Mongoose")});
  app.listen(PORT, ()=> {console.log("App is Listening")});