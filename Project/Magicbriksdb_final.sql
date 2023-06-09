
create table Objecttype(

 Id int primary key identity(1,1),
 Name varchar(50) not null,
 Parent_Id int default null,

)


create table Object(

 Id int primary key identity(1,1),
 Name varchar(50) not null,
 Obj_type_Id int FOREIGN KEY REFERENCES Object_type(Id),

)


create table Users (

 U_Id int primary key identity(1,1),
 Name varchar(50) not null,
 Email varchar(50) not null,
 PasswordHash varchar(max) not null,
 PasswordSalt varchar(max) not null,
RoleId int FOREIGN KEY REFERENCES Role(Id),
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int
)

ALTER TABLE Users
ALTER COLUMN PasswordHash varchar(max) not null;


create table Role(

Id int  primary key identity(1,1),
Role varchar(50) not null

)


create table Owner(

Id int  primary key identity(1,1),
Owner_Id int FOREIGN KEY REFERENCES Users(U_Id),
Owner_Name varchar(50) not null,
contact_no varchar(50) not null,
Email varchar(50) not null,

 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int

)





/*
Prop_Id int FOREIGN KEY REFERENCES Property(Prop_Id),
*/



create table Address(
Add_Id int primary key identity(1,1),
 Building_Name varchar(50) not null,
 Area varchar(50) not null,
 State int  FOREIGN KEY REFERENCES Objecttype(Id),
 City int  FOREIGN KEY REFERENCES Object(Id),
 Pincode varchar(50) not null,
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int

)





create table Property(
 Prop_Id int primary key identity(1,1),
Owner_details int FOREIGN KEY REFERENCES Owner(Id),
Address int FOREIGN KEY REFERENCES Address(Add_Id),
PostedBy int  FOREIGN KEY REFERENCES Object(Id),
Prop_for int  FOREIGN KEY REFERENCES Object(Id),
Prop_Type int  FOREIGN KEY REFERENCES Object(Id),
Status int FOREIGN KEY REFERENCES Object(Id),
Price int not null,
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int,

)


CREATE TABLE PropertyImages (
 Img_Id int primary key identity(1,1),
property_id int FOREIGN KEY REFERENCES Property(Prop_Id),

  Image_url VARCHAR(255) NOT NULL,
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int

)




create table Prop_amenities(

Id int primary key identity(1,1),
 Prop_Id int FOREIGN KEY REFERENCES Property(Prop_Id),
 Am_Id int  FOREIGN KEY REFERENCES Object(Id),
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int


)



create table Wishlist(

Id int primary key identity(1,1),
 Prop_Id int FOREIGN KEY REFERENCES Property(Prop_Id),
 User_id int FOREIGN KEY REFERENCES Users(U_Id),
 
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int


)









select * from Object_type
select * from Object


insert into Object_type  (Name) values('vi')

drop table Object_type




/*

create table Booking(
 Booking_Id int primary key identity(1,1),
 User_id nvarchar(450) FOREIGN KEY REFERENCES AspNetUsers(Id),
 Prop_Id int FOREIGN KEY REFERENCES Property(Prop_Id),

)





create table Amenities(
 Am_Id int primary key identity(1,1),
 
  Am_Name varchar(50) NOT NULL,
  
 CreatedDate datetime,
 ModifiedDate datetime,
 CreatedBy int,
ModifedBy int

)

*/





create table xyz(
id int primary key identity (1,1),
name varchar(50),
created_at DATETIME default CURRENT_TIMESTAMP 

)

drop table xyz

select * from xyz


insert into xyz (name) values('vikas')





select * from Objecttype
select * from Object
select * from Role
select * from Address
select * from Users
select * from Prop_amenities
select * from Property
select * from PropertyImages
select * from Owner
select * from Wishlist



select * from Users join Role on Users.RoleId= role.Id

















/******
Sp's
*/


select prop.Prop_Id, obj1.Name as amenity  from 
Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join  Property prop on o.Owner_Id=prop.Owner_details
join Prop_amenities prop_ame on prop.Prop_Id=prop_ame.Prop_Id
join Object obj1 on prop_ame.Am_Id=obj1.Id
for json auto 




select obj.Name as amenity from Prop_amenities am join Object obj on am.Am_Id=obj.Id where Prop_Id=13 for json auto

select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=14 for json auto

 
/*

0. user details

*/

create or alter procedure  userdetails  @userid int
as
select U_Id,Name,Email from Users where U_Id=@userid

exec userdetails @userid=15


/*1.*/

create or alter procedure UserListing @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl

from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID=@userid and obj5.Id=14







Exec UserListing @userid=15


Exec OtherUserListing @userid=15


/*
(select prop_img.Image_url from PropertyImages prop_img join  Property prop on prop_img.property_id=prop.Prop_Id where prop.Prop_Id=prop_img.property_id for json auto   ) Image_url

*/




/*
2.
*/



create or alter procedure OtherUserListing @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl

from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID!=@userid and obj5.Id=14
order by  prop.CreatedDate


Exec OtherUserListing @userid=2

select * from Prop_amenities


select * from Property jo


select * from Owner

select * from Prop_amenities



/*
3.
*/


create or alter procedure Avail_Prop @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,


o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl

from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id

where usr.U_ID !=@userid  and obj5.Name ='Available'
order by  prop.CreatedDate


Exec Avail_Prop @userid=15



/*
4.
*/



create or alter procedure PropType_Flat @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and obj4.Name ='Flat'and obj5.Id=14
order by  prop.CreatedDate


Exec PropType_Flat @userid=15




/*
5.
*/



create or alter procedure PropType_Villa @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and obj4.Name ='Villa' and obj5.Id=14
order by  prop.CreatedDate


Exec PropType_Villa @userid=2



/*
6
*/





create or alter procedure PropFor_sell @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and obj3.Name ='Sell'and obj5.Id=14
order by  prop.CreatedDate


Exec PropFor_sell @userid=3






/*
7.
*/





create or alter procedure PropFor_rent @userid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and obj3.Name ='Rent'and obj5.Id=14
order by  prop.CreatedDate


Exec PropFor_rent @userid=3





/*
8.
*/





create or alter procedure Prop_city @userid int,@city varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and obj.Name =@city and obj5.Id=14
order by  prop.CreatedDate

Exec Prop_city @userid=15,@city='Ahmedabad'





/*
9.
*/





create or alter procedure Prop_state @userid int,@state varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and otyp.Name =@state and obj5.Id=14
order by  prop.CreatedDate

Exec Prop_state @userid=4,@state='Gujrat'






/*
10.
*/





create or alter procedure Prop_state_city @userid int,@state varchar(50),@city varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where usr.U_ID !=@userid  and otyp.Name =@state and obj.Name =@city and obj5.Id=14
order by  prop.CreatedDate

Exec Prop_state_city @userid=15,@state='Gujrat',@city='ahmedabad'









/*
11.
*/





create or alter procedure Prop_budget @userid int,@low int,@high int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id

where usr.U_ID !=@userid  and prop.Price between @low and @high and obj5.Id=14
order by  prop.CreatedDate

Exec Prop_budget @userid=4,@low=50000,@high=123456789








/*
12. wish list need to check
*/

select * from Owner


select * from Property
select * from Wishlist
select * from Users


create or alter procedure userWishlist @userid int
as
select distinct
wlist.User_id,

prop.prop_desc,
pro.Prop_Id,
o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact,
ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Wishlist wlist 
join Property pro on wlist.Prop_Id= pro.Prop_Id 
join Owner o on wlist.User_id =o.Owner_Id  
join Property prop on o.Owner_Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id

where wlist.User_id=@userid and obj5.Id=14


exec userWishlist @userid=2











/*****************************.

for finding images and amenity from pericular user

******************************/




select obj.Name as amenity from Wishlist w join Property p on w.Prop_Id=p.Prop_Id 
join Owner o  on p.Owner_details=o.Id
join Prop_amenities pa on p.Prop_Id=pa.Prop_Id
join Object obj on pa.Am_Id=obj.Id
where w.User_id=2
for json auto

select pi.Image_url as images from Wishlist w join Property p on w.Prop_Id=p.Prop_Id 
join Owner o  on p.Owner_details=o.Id
join PropertyImages pi on p.Prop_Id=pi.property_id
where w.User_id=2
for json auto










/*

for normal user

*/


/*
1. see all property
*/


create or alter procedure AllListing 
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj5.Id=14




Exec AllListing



/*02.0 availible prop*/


create or alter procedure AllAvail_Prop
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj5.Name ='Available'
order by  prop.CreatedDate


Exec AllAvail_Prop 




/*
3.0*/


create or alter procedure AllFlat_Prop
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,


(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj4.Name ='Flat' and obj5.Id=14
order by  prop.CreatedDate


Exec AllFlat_Prop 



/*
4.0*/


create or alter procedure AllVilla_Prop
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id

where  obj4.Name ='Villa' and obj5.Id=14
order by  prop.CreatedDate


Exec AllVilla_Prop




/*
5.0*/


create or alter procedure Allsell_Prop
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,


(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj3.Name ='Sell' and obj5.Id=14
order by  prop.CreatedDate


Exec Allsell_Prop



/*
6.0*/


create or alter procedure Allrent_Prop
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj3.Name ='Rent' and obj5.Id=14
order by  prop.CreatedDate


Exec Allrent_Prop




/*
7.0*/


create or alter procedure Allstate_Prop @state varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  otyp.Name = @state and obj5.Id=14
order by  prop.CreatedDate


Exec Allstate_Prop @state='gujrat'




/*


property for click on city
8.0*/


create or alter procedure Allcity_Prop @city varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
 
where  obj.Name = @city and obj5.Id=14
order by  prop.CreatedDate


Exec Allcity_Prop @city='Ahmedabad'


/*
9.0*/


create or alter procedure Allcitystate_Prop @state varchar(50),@city varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj.Name = @city and otyp.Name=@state and obj5.Id=14
order by  prop.CreatedDate


Exec Allcitystate_Prop @state='gujrat',@city='ahmedabad'




/*10*/



create or alter procedure AllProp_budget @low int,@high int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  prop.Price between @low and @high and obj5.Id=14
order by  prop.CreatedDate

Exec AllProp_budget @low=50000,@high=123456789


/*
11 property by id
*/






create or alter procedure Propby_id @pid int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id

where  prop.Prop_Id =@pid and obj5.Id=14
order by  prop.CreatedDate


Exec Propby_id @pid=1


select * from Property



SELECT *
  FROM Objecttype


select * from Object



select o.Name  from Objecttype ot   join Object o on ot.id=o.Obj_type_Id
where ot.parent_Id=4 



select o.Name  from Objecttype ot   join Object o on ot.id=o.Obj_type_Id
where ot.id=2





/*
12.0


app propert on click on buy/rent on navbar for proptype_section

*/


create or alter procedure allPropOn_CTF @city varchar(50),@proptype varchar(50),@propfor varchar(50)
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  obj3.Name =@propfor and obj.Name=@city and obj4.Name=@proptype and obj5.Id=14
order by  prop.CreatedDate


Exec allPropOn_CTF @city='Ahmedabad',@proptype='flat',@propfor='sell'


/*13. all_prop_budhget

        //   on click on buy/rent ->budget section    on navbar for budget


*/

create or alter procedure allpropbudget_CFMinMax @city varchar(50),@propfor varchar(50), @low int,@high int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,

(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  prop.Price between @low and @high and obj.Name=@city and obj3.Name=@propfor and obj5.Id=14
order by  prop.CreatedDate

Exec allpropbudget_CFMinMax @city='Ahmedabad',@propfor='sell', @low=50000,@high=123456789





/*14. allpropserch_CTFMinMax from homecomponent serch

        //   on click on buy/rent ->serch box    on home component


*/

create or alter procedure allpropserch_CTFMinMax @city varchar(50),@proptype varchar(50), @propfor varchar(50), @low int,@high int
as
select distinct
usr.U_ID,
prop.Prop_Id,
prop.prop_desc,

o.Owner_Name,
o.Email as o_email,
o.contact_no as o_contact
,ad.Building_Name,ad.Area,ad.Pincode
,otyp.Name as state
,obj.Name as city,
obj2.Name as PostedBy,
obj3.Name PropertyFor,
obj4.Name PropertyType,
obj5.Name Status,
prop.Price,
prop.CreatedDate,
(select obj.Name as amenity from Prop_amenities  am join Object obj on am.Am_Id=obj.Id where am.Prop_Id=prop.Prop_Id for json auto) as prop_amenities,


(select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=prop.Prop_Id for json auto
  )  as imageUrl
from Users usr  join Owner o on usr.U_ID =o.Owner_Id  
join Property prop on o.Id= prop.Owner_details
join Address  ad on prop.Address= ad.add_id 
join  Objecttype otyp on ad.State=otyp.Id 
join Object obj on ad.City = obj.Id
join Object obj2 on prop.PostedBy = obj2.Id
join Object obj3 on prop.Prop_for = obj3.Id
join Object obj4 on prop.Prop_Type = obj4.Id
join Object obj5 on prop.Status=obj5.Id
join PropertyImages prop_img on prop.prop_Id =prop_img.property_id
where  prop.Price between @low and @high and obj.Name=@city and obj3.Name=@propfor and obj4.Name=@proptype and obj5.Id=14
order by  prop.CreatedDate

Exec allpropserch_CTFMinMax @city='Ahmedabad',@proptype='flat',@propfor='sell', @low=50000,@high=123456789




select * from Object
select * from Objecttype



select  name as propfor  from Object where Obj_type_Id = 3


select  name as postedby  from Object where Obj_type_Id = 10


  alter table property
  add Prop_desc varchar(500)


  select * from Property




  /*
 finding owner details and all
 */
    select p.Prop_Id,o.id as ownwerDetails_id,o.Owner_Name,o.contact_no,o.Email from Property p join Owner o on p.owner_details =o.id  where p.Prop_Id=13 and o.Owner_Id=15


	  /*
 finding address details and all
 */
    select p.Prop_Id as PropDetails_Id,ad.Add_Id ad AddressDetails_Id
	,ad.Building_Name,ad.Area,ad.State,ad.City,ad.Pincode  from Property p join Address ad on p.Address = ad.Add_Id	where p.Prop_Id=13  



	
	  /*
 finding property details and all
 */
   
   select p.Prop_Id as PropDetails_id,p.Owner_details,p.Address,p.PostedBy,p.Prop_for,p.Price,p.Prop_desc from Property p where Prop_Id=13



   	  /*
 finding amenity details and all
 */

 
select obj.Name as amenity from Prop_amenities am join Object obj on am.Am_Id=obj.Id where Prop_Id=13 for json auto

select pi.Img_Id, pi.Image_url  from PropertyImages Pi where pi.property_id=14 for json auto


 select p.Id as amenityDetails,p.Am_Id,p.Prop_Id from Prop_amenities p where p.Prop_Id=13
