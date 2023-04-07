// vacancy class
var Vacancy = /** @class */ (function () {
    function Vacancy(id, type, dept, n) {
        this.vid = id;
        this.vtype = type;
        this.vdept = dept;
        this.nvac = n;
    }
    return Vacancy;
}());
var v1 = new Vacancy(1, 'devloper', 'dotnet', 2);
var v2 = new Vacancy(2, 'devloper', 'python', 4);
var v3 = new Vacancy(3, 'devloper', 'react', 3);
var v4 = new Vacancy(4, 'devloper', 'sales', 1);
var vacarr = [];
vacarr.push(v1, v2, v3, v4);
//hr classes
var hr = /** @class */ (function () {
    function hr(id, name, gender) {
        this.name = name;
        this.gender = gender;
        this.id = id;
    }
    return hr;
}());
function createvac(role, date, dept, opening) {
    var id_v = Math.round(Math.random() * 100);
    var v = new Vacancy(id_v, role, dept, opening);
    vacarr.push(v);
}
function store(id, name, address, date, gender) {
    var aobj = new applicant(id, name, address, new Date(date), gender);
    adetails.push(aobj);
}
// let h1=new hr(2,"Sunil","male");
//class inteview
var Interview = /** @class */ (function () {
    function Interview(id, date, name, cid, cname) {
        this.id = id;
        this.date = date;
        this.interviewer = name;
        this.candidateid = cid;
        this.candidatename = cname;
    }
    return Interview;
}());
var interviewarr = [];
function schedule(id, date, cid, cname) {
    var i1 = new Interview(id, new Date(date), 'interviewer1', cid, cname);
    interviewarr.push(i1);
}
//class applicant
var applicant = /** @class */ (function () {
    function applicant(id, name, address, dob, gender) {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.id = id;
        this.result = 'fail';
    }
    applicant.prototype.accept = function () {
        alert('response sent');
    };
    applicant.prototype.reject = function () {
        alert('response sent');
    };
    return applicant;
}());
var adetails = [];
function apply() {
    alert('applied success fully');
}
function display(vacarr) {
    var vac = '';
    var i = 0;
    for (var _i = 0, vacarr_1 = vacarr; _i < vacarr_1.length; _i++) {
        var item = vacarr_1[_i];
        vac += "<div class=\"card  border border-3  \">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Department:".concat(item.vdept, "</h4>\n            <p class=\"card-text\">Role:").concat(item.vtype, "</p>\n            <p class=\"card-text\">No of vacancies:").concat(item.nvac, "</p>\n\n            \n            <div class=\"container d-flex justify-content-center\"><button id=\"btn").concat(i, "\" class=\"btn btn-primary\">Apply</button></div>\n          </div>\n        </div>");
        i++;
    }
    document.getElementById('app').innerHTML = vac;
}
display(vacarr);
for (var i = 0; i < vacarr.length; i++) {
    var btn = document.getElementById("btn".concat(i));
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        apply();
        console.log(adetails);
    });
}
var cv = document.getElementById('create');
cv === null || cv === void 0 ? void 0 : cv.addEventListener('click', function () {
    var role = document.getElementById('role');
    var dept = document.getElementById('dept');
    var n = document.getElementById('vacNo');
    var date = document.getElementById('date');
    if (role.value == '' ||
        date.value == '' ||
        dept.value == '' ||
        n.value == '') {
        alert('add details');
    }
    else {
        createvac(role.value, date.value, dept.value, parseInt(n.value));
    }
    display(vacarr);
});
// add aplicant by form
document.getElementById('applicant').innerHTML += "<br>\n  <div class=\"p-5 border\">\n  <div class=\"row\">\n    <label for=\"id\" class=\"col\">Id</label>\n    <input type=\"number\" id=\"id\" class=\"col\">\n  </div>\n  <div class=\"row my-3\">\n    <label for=\"name\" class=\"col\">Name:</label>\n    <input type=\"text\" class=\"col\" id=\"name\">\n  </div>\n  <div class=\"row \">\n    <label for=\"date\" class=\"col\">Dob:</label>\n    <input type=\"date\" id=\"dob\" class=\"col\">\n  </div>\n  <div class=\"row my-3\" >\n    <label for=\"address\" class=\"col\">Address:</label>\n    <textarea name=\"address\" class=\"col\" id=\"address1\" cols=\"30\" rows=\"4\"></textarea>\n  </div>\n  <div class=\"row \">\n  <div class=\"col\">\n  <label class=\"form-check-label\" for=\"gender\">\n   Gender:\n  </label>\n  </div>\n  <div class=\"col\">\n  <div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"male\" vlaue=\"male\">\n  <label class=\"form-check-label\" for=\"male\">\n   Male\n  </label>\n  </div>\n  <div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"female\" value=\"female\">\n  <label class=\"form-check-label\" for=\"female\">\n    female\n  </label>\n  </div>\n  </div>\n  </div>\n \n  <br>\n  <br>\n\n    <button class=\"btn btn-primary text-white w-100\" id=\"add\">Add</button>\n  \n  </div>";
document.getElementById('applicant').innerHTML += "<br><br><h1 class=\"text-center bg-light\">Candidate's data</h1>";
document.getElementById('applicant').innerHTML += " <br><table class=\"table border mt-2\" >\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Address</th>\n    <th>DOB</th>\n    <th>Gender</th>\n    <th>decision</th>\n    <th>Inrteview</th>\n  </tr>\n  </thead>\n  <tbody id=\"show_applicant\"></tbody>\n  </table>";
function dis_applicant() {
    document.getElementById('show_applicant').innerHTML = "";
    for (var i = 0; i < adetails.length; i++) {
        document.getElementById('show_applicant').innerHTML += "\n      <tr><td>".concat(adetails[i].id, "</td><td>").concat(adetails[i].name, "</td><td>").concat(adetails[i].address, "</td><td>").concat(adetails[i].dob.getDate(), "/").concat(adetails[i].dob.getMonth(), "/").concat(adetails[i].dob.getFullYear(), "</td><td>").concat(adetails[i].gender, "</td>\n      <td><button class=\"btn btn-primary\" id=\"hire").concat(i, "\" value=\"").concat(i, "\" onclick=\"hire(").concat(i, ")\">Pass</button></td>\n      <td><input type=\"date\" id=\"interdate").concat(i, "\" ><button class=\"btn btn-primary\" id=\"schedule").concat(i, "\" onclick=\"sched(").concat(i, ")\">schedule inteview</button></td></tr>");
    }
}
dis_applicant();
var add_applicant = document.getElementById('add');
add_applicant.addEventListener('click', function () {
    var id = document.getElementById('id');
    var name = document.getElementById('name');
    var dob = document.getElementById('dob');
    var address = document.getElementById('address1');
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var gender = '';
    if (male.checked == true) {
        gender = 'male';
    }
    else if (female.checked == true) {
        gender = 'female';
    }
    if (name == '' || id == '' || dob == '' || address == '' || gender == '') {
        alert('enter applicant data');
    }
    else {
        // console.log(id.value,name.value,gender,address.value,dob.value)
        store(parseInt(id.value), name.value, address.value, dob.value, gender);
        dis_applicant();
    }
});
function hire(val) {
    document.getElementById("hire".concat(val)).innerHTML = "passed";
    adetails[val].result = 'pass';
    show();
}
function sched(id) {
    var idate = document.getElementById("interdate".concat(id));
    var d = idate.value;
    console.log(d);
    schedule(id, d, adetails[id].id, adetails[id].name);
    console.log(interviewarr);
    document.getElementById('schedules').innerHTML = "<table class=\"table table-stripped border mt-2\" >\n  <thead>\n  <tr>\n    <th>Candidate Id</th>\n    <th>Interviewer</th>\n    <th>Candidate Name</th>\n    <th>Date</th>\n  </tr>\n  </thead>\n  <tbody id=\"sched_dis\"></tbody>\n  </table>";
    for (var _i = 0, interviewarr_1 = interviewarr; _i < interviewarr_1.length; _i++) {
        var val = interviewarr_1[_i];
        document.getElementById('sched_dis').innerHTML += "\n  <tr><td>".concat(val.candidateid, "</td><td>").concat(val.candidatename, "</td><td>").concat(val.interviewer, "</td><td>").concat(val.date.getDate(), "/").concat(val.date.getMonth(), "/").concat(val.date.getFullYear(), "</td></tr>\n  ");
    }
}
//show results of interview
function show() {
    document.getElementById('result').innerHTML = "";
    for (var _i = 0, adetails_1 = adetails; _i < adetails_1.length; _i++) {
        var val = adetails_1[_i];
        if (val.result == 'pass') {
            document.getElementById('result').innerHTML += "\n        <tr><td>".concat(val.id, "</td><td>").concat(val.name, "</td><td>").concat(val.address, "</td><td>").concat(val.dob.getDate(), "/").concat(val.dob.getMonth(), "/").concat(val.dob.getFullYear(), "</td><td>").concat(val.gender, "</td>\n        <td>").concat(val.result, "</td>\n     </tr>");
        }
    }
}
