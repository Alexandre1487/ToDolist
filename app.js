//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    const day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});






x = process.env.PORT || 3060;
app.listen(x, function () {
    console.log("Server started on port " + x);
});




// "TEMPLAIT BASE PARA FILES JAVASCRIPT"

// //jshint esversion: 6

// const express = require('express');
// const bodyParser = require("body-parser");


// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.sendFile("Hello");
// });





// x = process.env.PORT || 3060;
// app.listen(x, function () {
//     console.log("Server started on port " + x);
// });