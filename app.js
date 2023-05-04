const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

let listItems = ["Code", "Eat", "Sleep"];
app.get("/", function (req, res) {

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { todoDay: day, todoList: listItems });
});

app.listen(3000);