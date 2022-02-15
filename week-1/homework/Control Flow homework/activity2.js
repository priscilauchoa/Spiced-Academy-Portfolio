var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var propA in a) {
    var valueA = a[propA];
    b[valueA] = propA;
}

console.log(b);
