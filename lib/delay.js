module.exports = function(s,cb) {
    setTimeout(function(){
        cb()
    },s*1000);
}