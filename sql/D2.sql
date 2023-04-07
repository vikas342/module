
---day 2


---assignment 1


---1 Write create table syntax for employee table


CREATE TABLE Employee (
    EMPLOYEE_ID  int PRIMARY KEY,
    FIRST_NAME VARCHAR(50) NOT NULL,
    LAST_NAME VARCHAR(50) NOT NULL,
    SALARY INT NOT NULL,
    JOINING_DATE DATETIME NOT NULL,
    DEPARTMENT VARCHAR(50) NOT NULL
    )



    SELECT * FROM Employee

    DROP TABLE Employee

    INSERT INTO Employee VALUES(1,'John','Abraham',1000000,'01-JAN-13 12:00:00 AM','Banking')


    INSERT INTO Employee VALUES(2,'Michael','Clarke',10000000,'1-JAN-13 12:00:00 AM','Insurance')
    INSERT INTO Employee VALUES(3,'Roy','Thomas',700000,'01-FEB-13 12:00:00 AM','Banking')
    INSERT INTO Employee VALUES(4,'Tom','Jose',600000,'01-FEB-13 12:00:00 AM', 'Insurance')
    INSERT INTO Employee VALUES(5,'Jerry', 'Pinto', 650000 ,'01-FEB-13 12:00:00 AM','Insurance')
    INSERT INTO Employee VALUES(6 ,'Philip ','Mathew',750000,'01-JAN-13 12:00:00 AM','Services')


    INSERT INTO Employee VALUES(7,'TestName1','123',650000,'01-JAN-13 12:00:00 AM','Services')

    INSERT INTO Employee VALUES(8,'TestName2','Lname%',600000,'01-FEB-13 12:00:00 AM','Insurance')

     



SELECT * into  Employee2
FROM Employee


    SELECT * FROM Employee2


---2. Get all employee details from the employee table

    SELECT * FROM Employee


---3. Get First_Name, Last_Name from employee table 

    SELECT FIRST_NAME,Last_Name FROM Employee



--4. Get First_Name from employee table using alias name “Employee Name”

    SELECT FIRST_NAME AS Fname FROM Employee


--5. Get employee details from employee table whose employee name is “John”

SELECT * from Employee where FIRST_NAME='John'


---6. Get employee details from employee table whose employee name are “John” and “Roy”


SELECT * from Employee where FIRST_NAME='John' OR FIRST_NAME='Roy'


---7. Get employee details from employee table whose employee name are not “John” and “Roy”

SELECT * from Employee where not (FIRST_NAME='John' OR FIRST_NAME='Roy')


---8. Get employee details from employee table whose first name starts with 'J' 

    SELECT * FROM Employee WHERE First_Name LIKE 'J%'


 ---9. Get employee details from employee table whose first name contains 'o'
     SELECT * FROM Employee WHERE First_Name LIKE '%O%'


 --10. Get employee details from employee table whose Salary between 500000 and 800000 

    SELECT * from Employee where SALARY BETWEEN 500000 and 800000

 ---11. Get unique DEPARTMENT from employee table 

        SELECT DEPARTMENT As Unique_Deprtments from Employee group by(DEPARTMENT)

 --12. Select TOP 2 salary from employee table 

      SELECT  Top 2 Salary from Employee 


 ---13. Store the output of below query in common table expression, and then find out the average of their salary 

    SELECT AVG(Salary) FROM Employee 


 ---14. Get employee details from employee table whose Salary between 500000 and 800000 

    SELECT * FROM Employee WHERE salary BETWEEN 500000 and 800000 

 --15. Get names of employees from employee table who has '%' in Last_Name. 

    SELECT * FROM Employee WHERE Last_Name LIKE '%[%]'


 --16. Give 10% incentive to each employee, find out the employee whose incentive amount is more than 1lac, using derived table



            Alter TABLE Employee
            ADD Final_Salary int 

    SELECT * FROM Employee


    UPDATE Employee
    set Final_Salary = SALARY + (SALARY * 0.1)

    SELECT * from Employee where (SALARY * 0.1) >100000
 


---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---------------------------------------------------------------
---Assignment 2


--1. Write a query that displays the first name and the length of the first name for all employees whose name starts with the letters 'A', 'J' or 'M'. Give each column an appropriate label. Sort the results by the employees' first names.


SELECT First_Name,LEN(First_Name) As Len FROM Employee WHERE First_Name LIKE '[AGM]%'


--2. Write a query to display the first name and salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.

Select RIGHT(REPLICATE('0',10) + CONVERT(varchar (50),SALARY) ,10) as Salary,First_Name from Employee

--3. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year. 


SELECT EMPLOYEE_ID,First_Name,Last_Name,JOINING_DATE from Employee


--4. Write a query to display the length of first name for employees where last name contain character 'c' after 2nd position. 


SELECT LEN(First_Name) as len,First_Name,Last_Name from Employee 
WHERE Last_Name LIKE '_c%'

SELECT LEN(First_Name) as len,First_Name,Last_Name from Employee 
WHERE Last_Name LIKE '_a%'



--5. Write a query to extract the last 4 character of phone numbers. 





--6. Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'. 