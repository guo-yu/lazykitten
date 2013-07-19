module.exports = function(s, cb) {
    var delay = 1;
    if (!isNaN(parseFloat(s))) {
        delay = s;
    }
    setTimeout(function() {
        cb()
    }, delay * 1000);
}