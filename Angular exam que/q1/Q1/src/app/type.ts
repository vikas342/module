export interface datatype {
  states: States[]
  Cities:Cities[]
  users:users[]


}

export interface States {
  StateID: number
  StateName: string
}

export interface Cities {
  CityID: number
  Name: string
  StateName: string
}

export interface users {
  userName: string

  password: string

  role: string
}





export interface student
{
  Fullname:Fullname,
  Email:string,
  Address:Address,
  Gender:string,
  // skills:string[],
  skills:string,
  EducationDetails:EducationDetails
}


export interface Fullname{

  Firstname:string,
  Middlename:string,
  Lastname:string,


}


export interface Address{

  Building:string,
  Area:string,
  State:string,
  City:string,


}


export interface EducationDetails
{
  Tenth:Details,
  Twelth:Details,

  Degree:Details,



}


export interface Details
{
  Marks:number,
  Grade:string,
  Yearofpassing:string,


}
