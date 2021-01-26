// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
// Sets up the Express App
const app = express();
//process.env - property returns an object containing the user environment.
const PORT = process.env.Port || 3000;
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Static files and resources
app.use(express.static("public"));



require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)


    //Listening to port    
app.listen(PORT, function () {
    console.log("Listening on localhost:" + PORT);
});
        
    
