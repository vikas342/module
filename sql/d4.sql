

-----p1



create view myview as 
select * from cars_2



select * from myview



---p2


create index myindex on cars_2
(Brand)


select * from cars_2 where Brand='ford'

select * from cars_2 where name='mustang'


---p3

select * from cars_2

create procedure cardata as
select Brand,NAME from cars_2


EXEC cardata





----


Declare @marks int=2;

if @marks>=45
begin
print 'asdfghjk'
end

else
begin
print 'gyj'
end




declare @x int=1;

while @x <=5
begin
print 'asd';
set @x=@x+1;

end;


select * from cars_2


------
create procedure my_procedure @price int
as
select * from cars_2 where price=@price


Exec my_procedure 31000

-------


alter procedure my_procedure2 @price int
as

if @price<30000
Begin
select * from cars_2 where price=@price;
print 'if'

Insert into cars_2 values('xtz','asd',@price)


End
else
Begin
select * from cars_2 where price=@price;
print 'else'
End



Exec my_procedure2 27890





-------



select *,
CASE 
when price<=27890 then '27890 or below'

else'30000or above'
end as s
from cars_2





----A1


select * from Empp


---1  Create a view Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table 


create view banking_dep as
select * from Empp where DEPARTMENT='Banking'

select * from banking_dep


create view insurance_dep as
select * from Empp where DEPARTMENT='Insurance'

select * from insurance_dep


create view service_dep as
select * from Empp where DEPARTMENT='Services'

select * from service_dep



---2  Select employee details from employee table if data exists in incentive table ?

select * from Empp

select * from Incentives

select EMPLOYEE_ID,concat(FIRST_NAME,' ',LAST_NAME)as full_name, SALARY,DEPARTMENT,INCENTIVE_AMOUNT from Empp inner join  Incentives  on EMPLOYEE_ID=EMPLOYEE_REF_ID


--3 Find Salary of the employee whose salary is more than Roy Salary

select * from Empp where SALARY >(select SALARY from Empp where FIRST_NAME='Roy')


--4 Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount 

create view  Empp_data1 as
select e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,i.INCENTIVE_DATE,i.INCENTIVE_AMOUNT from Empp as e  inner join Incentives as i on EMPLOYEE_ID= EMPLOYEE_REF_ID


select * from Empp_data1


--5. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 

create view  Empp_data2 as
select e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,i.INCENTIVE_DATE,i.INCENTIVE_AMOUNT from Empp as e  inner join Incentives as i on EMPLOYEE_ID= EMPLOYEE_REF_ID
where i.INCENTIVE_AMOUNT>3000


select * from Empp_data2
select * from Incentives
select * from Empp




--6. Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London,
--Create a view to get the department name and number of employees in the department. 

create view Empp_dep as
select DEPARTMENT, RANK() over(order by DEPARTMENT ) as D_id
from Empp
group by DEPARTMENT


select Empp.first_name,Empp.last_name,Empp.department, Empp_dep.D_id from Empp JOIN Empp_dep 
ON Empp.department=Empp_dep.DEPARTMENT

drop view Empp_dep

select * from Empp_dep




--7. Create a View to get the department name and number of employees in the department. 


create view Empp_data3 as
select DEPARTMENT,count(EMPLOYEE_ID) as Total_Emp
from Empp
group by DEPARTMENT

select * from Empp_data3



--9. Write a query to display the department name, manager name, and city. 



select * from Empp

Alter table Empp
add Location varchar(50)



select DEPARTMENT,Manager_id,Location
from Empp


