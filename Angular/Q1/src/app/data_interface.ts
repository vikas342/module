
export interface data
{

  BasicPrice:number,
  MovieName:number,
  Rows:rows[]
}


export interface rows
{
  row:number,
  Start:number
  End:number,
  AlreadyBooked: Booked[]
}


export interface Booked{
  seat_number:number
}
