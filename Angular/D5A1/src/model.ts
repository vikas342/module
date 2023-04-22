export interface student_data {
  Name: Name;
  Address: Address;
  Father: Parents;
  Mother: Parents;
  Emergency_Contact_List:Emergency_Contact_List[]
}

export interface Name {
  First: string;
  Middle: string;
  Last: string;
  DOB: string;
  Place_of_Birth: string;
  First_Language: string;
}

export interface Address {
  City: string;
  State: string;
  Country: string;
  Pin: string;
  Father: Parents;
  Mother: Parents;
  Emergency_Contact_List:Emergency_Contact_List[]
}

export interface FullName {
  First: string;
  Middle: string;
  Last: string;
}

export interface Parents {
  FullName: FullName;
  Email: string;

  Education: string;

  Phone: string;
}

export interface Emergency_Contact_List{
  pname: string,
  p_cno:string
}

