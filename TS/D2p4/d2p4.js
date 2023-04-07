var cities;
(function (cities) {
    cities["city1"] = "ahmedabad";
    cities["city2"] = "pune";
    cities["city3"] = "mumbai";
    cities["city4"] = "hydrabad";
})(cities || (cities = {}));
console.log("my city is ".concat(cities.city1));
console.log("my city is ".concat(cities.city2));
console.log("my city is ".concat(cities.city3));
console.log("my city is ".concat(cities.city4));
