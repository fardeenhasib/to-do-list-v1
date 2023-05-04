module.exports.dayDetail = function () {

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}
