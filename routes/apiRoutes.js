var path = require("path");
const fs = require("fs");

module.exports = function(app) {

    // console.log("test")
    fs.readFile("./db/db.json", "utf-8", function (error, data) {
        if (error) {
            return console.log(error);
        }
    });
  app.post("/api/notes", function (req, res) {
    
    });
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf-8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            console.log("Note: ", data)
            res.json(JSON.parse(data))
        });
    });
 
}