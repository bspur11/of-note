const express = require("express");
const app = express();
const PORT = process.env.PORT || "3001"

app.use(express.static("public"))
// from client =>  const newNote = {
//   title: noteTitle.value,
//   text: noteText.value,
// };
//  go to the server via port 3001 as an encrptyed data that looks like dskfhldskjfldkjfls.
// When the server receives that data, it will parse the data to the original format anmd stores it in req.body. The code below is the data parser using express 
app.use(express.urlencoded({extended: true}))
app.use(express.json())


const apiRoutes = require("./routes/apiRoutes")

app.use(apiRoutes)

const htmlRoutes = require("./routes/htmlRoutes")
app.use(htmlRoutes)

app.listen(PORT, function() {
  console.log("App is listening on port " +PORT)
})