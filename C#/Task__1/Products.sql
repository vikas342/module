


create table Product(
Id int identity(1,1),
ProductName varchar(100),
Qty int
)


select * from Product


drop table Product

Insert into Product values('Apple',10)



select qty from product where id=1

delete Product where Id=1;


update Product 
set Qty=Qty-1
where id=7