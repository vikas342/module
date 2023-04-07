

namespace users {
  interface user {
    name: string;
    id: number;
  }
  export class user_data implements user {
    name: string;
    id: number;
    constructor(num: number, name: string) {
      this.name = name;
      this.id = num;
    }
  }
}
let arr: users.user_data[] = [];

let u1=new users.user_data(1,"vikas");
let u2=new users.user_data(2,"vinit");
let u3=new users.user_data(3,"preet");

arr.push(u1, u2, u3);
for (const val of arr) {
  console.log(`name : ${val['name']} id:${val['id']}`);
}
