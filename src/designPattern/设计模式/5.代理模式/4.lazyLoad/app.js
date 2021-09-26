let express  = require("express")
 let path  = requrie("path")
 let app  = express()
 app.get("/images/loading.gif", function (req,res){
   res.sendFile(path.join(__dirname,req.path))
 })
 app.get("/images/:name", function (req,res){
    setTimeout(() => {
      res.sendFile(path.join(__dirname, req.path))
      
    }, 1000);
 })
 app.get("/", function (req, res) {
   res.sendFile(path.resolve("index.html"))

 })
 app.listen(8080)