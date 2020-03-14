module.exports = function reverse (n) {
    var str = n.toString().split("").reverse().join("");
    return parseInt(str);
}
