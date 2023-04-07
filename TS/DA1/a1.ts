//interface
interface person {
    name: string;
    gender: string;
    id: number;
  }
  // vacancy class
  class Vacancy {
    vid: number;
    vtype: string;
    vdate: Date;
    vdept: string;
    nvac: number;
    constructor(id: number, type: string, dept: string, n: number) {
      this.vid = id;
      this.vtype = type;
      
      this.vdept = dept;
      this.nvac = n;
    }
  }
  let v1 = new Vacancy(1, 'devloper','dotnet', 2);
  let v2 = new Vacancy(2, 'devloper','python', 4);
  let v3 = new Vacancy(3, 'devloper', 'react', 3);
  let v4 = new Vacancy(4, 'devloper', 'sales', 1);
  let vacarr: Vacancy[] = [];
  vacarr.push(v1, v2, v3, v4);
  
  //hr classes
  
  class hr implements person {
    id: number;
    name: string;
    gender: string;
    constructor(id: number, name: string, gender: string) {
      this.name = name;
      this.gender = gender;
      this.id = id;
    }
  }
  function createvac(
    role: string,
    date: string,
    dept: string,
    opening: number
  ): void {
    let id_v = Math.round(Math.random() * 100);
    let v = new Vacancy(id_v, role,  dept, opening);
    vacarr.push(v);
  }
  function store(
    id: number,
    name: string,
    address: string,
    date: string,
    gender: string
  ) {
    let aobj = new applicant(id, name, address, new Date(date), gender);
    adetails.push(aobj);
  }
  // let h1=new hr(2,"Sunil","male");
  
  //class inteview
  class Interview {
    id: number;
    date: Date;
    interviewer: string;
    candidateid: number;
    candidatename: string;
    constructor(
      id: number,
      date: Date,
      name: string,
      cid: number,
      cname: string
    ) {
      this.id = id;
      this.date = date;
      this.interviewer = name;
      this.candidateid = cid;
      this.candidatename = cname;
    }
  }
  let interviewarr: Interview[] = [];
  function schedule(id: number, date: string, cid: number, cname: string): void {
    let i1 = new Interview(id, new Date(date), 'interviewer1', cid, cname);
    interviewarr.push(i1);
  }
  //class applicant
  
  class applicant implements person {
    id: number;
    name: string;
    address: string;
    dob: Date;
    gender: string;
    result: string;
    constructor(
      id: number,
      name: string,
      address: string,
      dob: Date,
      gender: string
    ) {
      this.name = name;
      this.address = address;
      this.dob = dob;
      this.gender = gender;
      this.id = id;
      this.result = 'fail';
    }
    accept(): void {
      alert('response sent');
    }
    reject(): void {
      alert('response sent');
    }
  }
  let adetails: applicant[] = [
    
  ];
  function apply(): void {
    alert('applied success fully');
  }
  
  function display(vacarr: Vacancy[]): void {
    let vac: string = '';
    let i: number = 0;
    for (const item of vacarr) {
      vac += `<div class="card  border border-3  ">
          <div class="card-body">
            <h4 class="card-title">Department:${item.vdept}</h4>
            <p class="card-text">Role:${item.vtype}</p>
            <p class="card-text">No of vacancies:${item.nvac}</p>

            
            <div class="container d-flex justify-content-center"><button id="btn${i}" class="btn btn-primary">Apply</button></div>
          </div>
        </div>`;
      i++;
    }
    document.getElementById('app')!.innerHTML = vac;
  }
  display(vacarr);
  for (let i = 0; i < vacarr.length; i++) {
    var btn = document.getElementById(`btn${i}`);
    btn?.addEventListener('click', () => {
      apply();
      console.log(adetails);
    });
  }
  var cv = document.getElementById('create');
  cv?.addEventListener('click', () => {
    let role: HTMLInputElement | any = document.getElementById('role');
    let dept: HTMLInputElement | any = document.getElementById('dept');
    let n: HTMLInputElement | any = document.getElementById('vacNo');
    let date: HTMLInputElement | any = document.getElementById('date');
    if (
      role!.value == '' ||
      date!.value == '' ||
      dept!.value == '' ||
      n!.value == ''
    ) {
      alert('add details');
    } else {
      createvac(role!.value, date!.value, dept!.value, parseInt(n!.value));
    }
    display(vacarr);
  });




  // add aplicant by form
  document.getElementById('applicant')!.innerHTML += `<br>
  <div class="p-5 border">
  <div class="row">
    <label for="id" class="col">Id</label>
    <input type="number" id="id" class="col">
  </div>
  <div class="row my-3">
    <label for="name" class="col">Name:</label>
    <input type="text" class="col" id="name">
  </div>
  <div class="row ">
    <label for="date" class="col">Dob:</label>
    <input type="date" id="dob" class="col">
  </div>
  <div class="row my-3" >
    <label for="address" class="col">Address:</label>
    <textarea name="address" class="col" id="address1" cols="30" rows="4"></textarea>
  </div>
  <div class="row ">
  <div class="col">
  <label class="form-check-label" for="gender">
   Gender:
  </label>
  </div>
  <div class="col">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="male" vlaue="male">
  <label class="form-check-label" for="male">
   Male
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="female" value="female">
  <label class="form-check-label" for="female">
    female
  </label>
  </div>
  </div>
  </div>
 
  <br>
  <br>

    <button class="btn btn-primary text-white w-100" id="add">Add</button>
  
  </div>`;
  document.getElementById(
    'applicant'
  )!.innerHTML += `<br><br><h1 class="text-center bg-light">Candidate's data</h1>`;
  document.getElementById(
    'applicant'
  )!.innerHTML += ` <br><table class="table border mt-2" >
  <thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Address</th>
    <th>DOB</th>
    <th>Gender</th>
    <th>decision</th>
    <th>Inrteview</th>
  </tr>
  </thead>
  <tbody id="show_applicant"></tbody>
  </table>`;
  function dis_applicant(): void {
    document.getElementById('show_applicant')!.innerHTML = ``;
    for (let i = 0; i < adetails.length; i++) {
      document.getElementById('show_applicant')!.innerHTML += `
      <tr><td>${adetails[i].id}</td><td>${adetails[i].name}</td><td>${
        adetails[i].address
      }</td><td>${adetails[i].dob.getDate()}/${adetails[
        i
      ].dob.getMonth()}/${adetails[i].dob.getFullYear()}</td><td>${
        adetails[i].gender
      }</td>
      <td><button class="btn btn-primary" id="hire${i}" value="${i}" onclick="hire(${i})">Pass</button></td>
      <td><input type="date" id="interdate${i}" ><button class="btn btn-primary" id="schedule${i}" onclick="sched(${i})">schedule inteview</button></td></tr>`;
    }
  }
  dis_applicant();
  let add_applicant = document.getElementById('add');
  add_applicant!.addEventListener('click', () => {
    let id: HTMLInputElement | any = document.getElementById('id');
    let name: HTMLInputElement | any = document.getElementById('name');
    let dob: HTMLInputElement | any = document.getElementById('dob');
    let address: HTMLTextAreaElement | any = document.getElementById('address1');
    let male: HTMLInputElement | any = document.getElementById('male');
    let female: HTMLInputElement | any = document.getElementById('female');
    let gender: string = '';
    if (male.checked == true) {
      gender = 'male';
    } else if (female.checked == true) {
      gender = 'female';
    }
    if (name == '' || id == '' || dob == '' || address == '' || gender == '') {
      alert('enter applicant data');
    } else {
      // console.log(id.value,name.value,gender,address.value,dob.value)
      store(parseInt(id.value), name.value, address.value, dob.value, gender);
      dis_applicant();
    }
  });
  function hire(val: number) {
    
    document.getElementById(`hire${val}`)!.innerHTML = `passed`;
    adetails[val].result = 'pass';
    show();
  }
  
  function sched(id: number) {
    let idate: HTMLInputElement | any = document.getElementById(`interdate${id}`);
    let d = idate!.value;
    console.log(d);
    schedule(id, d, adetails[id].id, adetails[id].name);
    console.log(interviewarr);
    document.getElementById(
      'schedules'
    )!.innerHTML = `<table class="table table-stripped border mt-2" >
  <thead>
  <tr>
    <th>Candidate Id</th>
    <th>Interviewer</th>
    <th>Candidate Name</th>
    <th>Date</th>
  </tr>
  </thead>
  <tbody id="sched_dis"></tbody>
  </table>`;
    for (const val of interviewarr) {
      document.getElementById('sched_dis')!.innerHTML += `
  <tr><td>${val.candidateid}</td><td>${val.candidatename}</td><td>${
        val.interviewer
      }</td><td>${val.date.getDate()}/${val.date.getMonth()}/${val.date.getFullYear()}</td></tr>
  `;
    }
  }
  //show results of interview
  function show() {
    document.getElementById('result')!.innerHTML = ``;
    for (const val of adetails) {
      if (val.result == 'pass') {
        document.getElementById('result')!.innerHTML += `
        <tr><td>${val.id}</td><td>${val.name}</td><td>${
          val.address
        }</td><td>${val.dob.getDate()}/${val.dob.getMonth()}/${val.dob.getFullYear()}</td><td>${
          val.gender
        }</td>
        <td>${val.result}</td>
     </tr>`;
      }
    }
  }
  