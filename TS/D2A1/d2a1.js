//creating applicant 
// adding candidate
var applicant = /** @class */ (function () {
    function applicant(id, name, email, age, gender, position) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.position = position;
    }
    applicant.prototype.send = function () {
        alert("data sent");
    };
    return applicant;
}());
var applicant_data = [
    new applicant(1, "vikas", "vsonwane@", 21, "male", ".net dveloper"),
    new applicant(2, "vinit", "vinit@", 22, "male", "php dveloper"),
    new applicant(3, "preet", "preet@", 23, "male", "java dveloper")
];
function send() {
    alert("applied succesfully");
}
var vacancy = /** @class */ (function () {
    function vacancy(id, position, no_vac) {
        this.id = id;
        this.position = position;
        this.no_vac = no_vac;
    }
    return vacancy;
}());
var arr_vacancy = [];
arr_vacancy.push(new vacancy(1, "data scientist", 5), new vacancy(2, ".net dveloper", 5), new vacancy(3, "php dveloper", 5), new vacancy(4, "java dveloper", 5));
console.log(arr_vacancy);
function vac_add() {
}
