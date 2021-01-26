var path = require("path");
const fs = require("fs");

let notes = [];

module.exports = function(app) {

    // console.log("test")
    fs.readFile("./db/db.json", "utf-8", function (error, data) {
        if (error) throw error;
        notes = JSON.parse(data)
    });
   
    app.get("/api/notes", function (req, res) {
       res.json(notes);
    });

    app.post("/api/notes", function(req, res){
        let newnotes = req.body;
        notes.push(newnotes);
        updateDB();
        console.log("Added new note" + newnotes.title);
    });

    app.get("/api/notes/:id", function(req, res){
        res.json(notes[req.params.id]);
    });

    // app.update("/api/notes/:id", function(req, res){
    //     res.json(notes[req.params.id]);
    //     console.log("Note updated");
    // })

    app.delete("/api/notes/:id", function(req, res){
        notes.splice(req.params.id, 1);
        updateDB();
        console.log("Note deleted" + req.params.id);
    });

    function updateDB() {
        fs.writeFile("./db/db.json", JSON.stringify(notes, "\t"), (err) => {
            if (err) throw err;
            return true;
        });
    }

};
 
