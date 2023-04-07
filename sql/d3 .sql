----p


CREATE Table cars
(
    id int PRIMARY key IDENTITY(1,1),
    Name VARCHAR(50) not NULL,
    Price int not null,

)


ALTER table cars

    add Brand varchar(50)



select *
from cars


UPDATE cars
set Brand='GM'
where id=4


CREATE Table sold
(
    id int foreign key references cars(id),

    Price int not null,

)

drop TABLE sold


SELECT *
from sold

Insert into sold
values(1, 15000)
Insert into sold
values(2, 11000)
Insert into sold
values(3, 12300)

Insert into sold
values(4, 14500)






Insert into cars
values('Mustang', 15000)
Insert into cars
values('Camero', 11000)
Insert into cars
values('Charger', 12300)
Insert into cars
values('Corvette', 14500)



--p1

SELECT sum(price) as sum
from cars

SELECT count(id) as Count
from cars

SELECT avg(price) as avg_price
from cars

SELECT max(price) as max_price
from cars


SELECT min(price) as min_price
from cars



------------------------------------------------------------p2

--perticular times a car  sold

select
    id,
    count(id) as Total_sold
from sold
group by (id)



--select car sold for 3 times

select
    id,
    count(id) as Total_sold
from sold
group by (id)
HAVING COUNT(id) =3



------------------------------------------------------------p3




drop TABLE Invent

select *
into Invent
from cars

SELECT *
from Invent



------------------------------------------------------------p4


select cars.Name, sold.price
from cars INNER JOIN sold on cars.id=sold.id


select cars.Name, sold.price
from cars FULL JOIN sold on cars.id=sold.id

select *
from cars LEFT OUTER JOIN sold on cars.id=sold.id

select a.id, b.price
from cars a, cars b
WHERE a.id <> b.id


select *
from cars





------------------------------------------------------------p5



select *
from Cars
where id in (select id
from cars
WHERE price>12000 )







--------*---------------Assignment ---------------------------------------------


CREATE TABLE Empp
(
    EMPLOYEE_ID int PRIMARY KEY,
    FIRST_NAME VARCHAR(50) NOT NULL,
    LAST_NAME VARCHAR(50) NOT NULL,
    SALARY INT NOT NULL,
    JOINING_DATE DATETIME NOT NULL,
    DEPARTMENT VARCHAR(50) NOT NULL,
    Manager_id INT,

)



SELECT *
FROM Empp

DROP TABLE Empp

INSERT INTO Empp
VALUES(1, 'John', 'Abraham', 1000000, '01-JAN-13 12:00:00 AM', 'Banking', null)


INSERT INTO Empp
VALUES(2, 'Michael', 'Clarke', 10000000, '1-JAN-13 12:00:00 AM', 'Insurance', 1)
INSERT INTO Empp
VALUES(3, 'Roy', 'Thomas', 700000, '01-FEB-13 12:00:00 AM', 'Banking', 1)
INSERT INTO Empp
VALUES(4, 'Tom', 'Jose', 600000, '01-FEB-13 12:00:00 AM', 'Insurance', 5)
INSERT INTO Empp
VALUES(5, 'Jerry', 'Pinto', 650000 , '01-FEB-13 12:00:00 AM', 'Insurance', 3)
INSERT INTO Empp
VALUES(6 , 'Philip ', 'Mathew', 750000, '01-JAN-13 12:00:00 AM', 'Services', 3)


INSERT INTO Empp
VALUES(7, 'TestName1', '123', 650000, '01-JAN-13 12:00:00 AM', 'Services', 2)

INSERT INTO Empp
VALUES(8, 'TestName2', 'Lname%', 600000, '01-FEB-13 12:00:00 AM', 'Insurance', 2)



CREATE TABLE Incentives
(
    EMPLOYEE_REF_ID int PRIMARY KEY not null,
    INCENTIVE_DATE DATE not null,
    INCENTIVE_AMOUNT int not null,
)


Insert into Incentives
values(
        1 , '01-FEB-13', 5000 
   
)
Insert into Incentives
values(
        2 , '01-FEB-13 ', 3000 
   
)
Insert into Incentives
values(
        3 , '01-FEB-13' , 4000 
   
)
Insert into Incentives
values(
        4 , '01-JAN-13', 4500 
   
)
Insert into Incentives
values(
        5, '01-JAN-13', 3500
   
)


select *
from Incentives

select *
from Empp



--1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table 


SELECT Empp.JOINING_DATE, Incentives.INCENTIVE_DATE, DATEDIFF(DAY,Empp.JOINING_DATE,Incentives.INCENTIVE_DATE) as diff
from Empp INNER JOIN
    Incentives on Empp.EMPLOYEE_ID = Incentives.EMPLOYEE_REF_ID


--2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 



select e.first_name, i.INCENTIVE_AMOUNT
from Empp as e
    INNER JOIN
    Incentives as i
    on 
e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID
where i.INCENTIVE_AMOUNT>3000




--3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives. 


select e.first_name, i.INCENTIVE_AMOUNT
from Empp as e
    left OUTER JOIN
    Incentives as i
    on 
e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID







--4. Select EmployeeName, ManagerName from the employee table. 



SELECT (FIRST_NAME +' '+ LAST_NAME) as  Fullname, Manager_id
from Empp


---5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives and set incentive amount as 0 for those employees who didn't get incentives. 



select (e.FIRST_NAME +' '+ e.LAST_NAME) as  Fullname, COALESCE(i.INCENTIVE_AMOUNT,0)
from empp as e
    left OUTER JOIN
    Incentives as i
    on e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID





---6. Get department,total salary with respect to a department from employee table. 


select DEPARTMENT, sum(SALARY) as Total_Sal
from empp
GROUP by DEPARTMENT





--7. Get department,total salary with respect to a department from employee table order by total salary des cending


select DEPARTMENT, sum(SALARY) as Total_Sal
from empp
GROUP by DEPARTMENT
ORDER by Total_Sal desc




--8. Get department wise maximum salary from employee table order by salary ascending 

select DEPARTMENT, max(SALARY) as Total_Sal
from empp
GROUP by DEPARTMENT
ORDER by Total_Sal



--9. Get department wise minimum salary from employee table order by salary ascending 


select DEPARTMENT, min(SALARY) as Total_Sal
from empp
GROUP by DEPARTMENT
ORDER by Total_Sal

--10. Select department,total salary with respect to a department from employee table where total salary greater than 800000 order by Total_Salary descending




select department,sum(SALARY) Total_Sal
from empp
GROUP BY department
HAVING sum(SALARY)>800000
ORDER by Total_Sal desc

