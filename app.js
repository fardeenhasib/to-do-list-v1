const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let listItems = ["Code", "Eat", "Sleep"];
let workItems = [];

app.get("/", function (req, res) {

    let day = date.dayDetail();

    res.render("list", { todoDay: day, todoList: listItems });
});

app.get("/work", function (req, res) {
    res.render("list", { todoDay: "Work-List", todoList: workItems })
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    console.log(req.body);
    let newItem = req.body.NewItem;
    let listType = req.body.ListType;
    if (listType === "Work-List") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        listItems.push(newItem);
        res.redirect("/");
    }

});



app.listen(3000);