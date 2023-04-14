

--assignment


--1. Create a Store Procedure Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table 


select * from Empp

go
create procedure  [Bank Dept] as
select * from Empp where DEPARTMENT= 'banking';


EXEC [Bank Dept]



go
create procedure  [Insurance Dept] as
select * from Empp where DEPARTMENT= 'insurance';


EXEC [Insurance Dept]



GO
create procedure  [Services Dep] as
select * from Empp where DEPARTMENT= 'services';


EXEC [Services Dep]





--2. Select employee details from employee table if data exists in incentive table ? 



go
	create procedure myprocedure_1 as
	select EMPLOYEE_ID,concat(FIRST_NAME,' ',LAST_NAME)as full_name, SALARY,DEPARTMENT,INCENTIVE_AMOUNT from Empp inner join  Incentives  on EMPLOYEE_ID=EMPLOYEE_REF_ID

	EXEC [myprocedure_1]


--3. Find Salary of the employee whose salary is more than Roy Salary 


go
create procedure myprocedure_2 as
select * from Empp where SALARY >(select SALARY from Empp where FIRST_NAME='Roy')

	EXEC [myprocedure_2]

--4. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount 



go

create or alter procedure myprocedure_3 as
select e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,i.INCENTIVE_DATE,i.INCENTIVE_AMOUNT from Empp as e  inner join Incentives as i on e.EMPLOYEE_ID= i.EMPLOYEE_REF_ID

	EXEC [myprocedure_3]



--5. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000




go

create procedure myprocedure_4 as
select e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,i.INCENTIVE_DATE,i.INCENTIVE_AMOUNT from Empp as e  inner join Incentives as i on EMPLOYEE_ID= EMPLOYEE_REF_ID
where i.INCENTIVE_AMOUNT>3000


	EXEC [myprocedure_4]







	----6


	declare @myvar varchar(max);

	set @myvar ='[
    {
      "Student_Name": "vikas",
      "Address": "ahmedabad",
      "City": "ahmedabad",
      "DOB": "03/04/2002",
      "Standard": 12
    },
    {
      "Student_Name": "vinit",
      "Address": "jaipur",
      "City": "jaipur",
      "DOB": "04/02/2003",
      "Standard": 11
    },
    {
      "Student_Name": "preet",
      "Address": "rajsthan",
      "City": "rajsthan",
      "DOB": "24/02/2001",
      "Standard": 10
    },
    {
      "Student_Name": "ronny",
      "Address": "surat",
      "City": "Surat",
      "DOB": "09/02/2005",
      "Standard": 7
    },
    {
      "Student_Name": "jaydeep",
      "Address": "udaipur",
      "City": "udaipur",
      "DOB": "04/02/2005",
      "Standard": 8
    }
  ]';



  begin try
   select * into #student from openJson(@myvar) with(

  Student_Name varchar(50) ,
      Address varchar(50),
      City varchar(50),
      DOB varchar(50),
      Standasdfrd int '$.Standard'
  )
  end try


  begin catch

  select ERROR_line() as no,ERROR_MESSAGE() as err_msg

  end catch

 

  drop table #student
  drop table mystudents




select * into mystudents from #student

select * from mystudents



----2

go

create or alter procedure json_procedure @myjson nvarchar(max)
as

 begin try
   select * into #student from openJson(@myjson) with(
      Student_Name varchar(50) ,
      Address varchar(50),
      City varchar(50),
      DOB varchar(50),
      Standasdfrd int '$.Standard'
  )

	select * from #student
	select * from #student for json auto
	 

  end try


  begin catch

  select ERROR_line() as no,ERROR_MESSAGE() as err_msg

  end catch



drop table mystudents2



declare @json varchar(max);

	set @json ='[
    {
      "Student_Name": "vikas",
      "Address": "ahmedabad",
      "City": "ahmedabad",
      "DOB": "03/04/2002",
      "Standard": 12
    },
    {
      "Student_Name": "vinit",
      "Address": "jaipur",
      "City": "jaipur",
      "DOB": "04/02/2003",
      "Standard": 11
    },
    {
      "Student_Name": "preet",
      "Address": "rajsthan",
      "City": "rajsthan",
      "DOB": "24/02/2001",
      "Standard": 10
    },
    {
      "Student_Name": "ronny",
      "Address": "surat",
      "City": "Surat",
      "DOB": "09/02/2005",
      "Standard": 7
    },
    {
      "Student_Name": "jaydeep",
      "Address": "udaipur",
      "City": "udaipur",
      "DOB": "04/02/2005",
      "Standard": 8
    }
  ]';

  EXEC json_procedure @json


  ---3


  create table sudents_(

  s_id int,
  StudentName varchar(50)
  )

  create table course(

  CourseID int, CourseName varchar(50)
  )


  
declare @json_1 varchar(max);

	set @json_1 ='[
    {
      "Student_Name": "vikas",
      "Student_id": "1",
      "CourseID":  "2",
      "CourseName": "xyz"
    },
    {
      "Student_Name": "vinit",
         "Student_id": "2",
      "CourseID":  "3",
      "CourseName": "xyz"
    },
    {
      "Student_Name": "preet",
         "Student_id": "3",
      "CourseID":  "1",
      "CourseName": "xyz"
    },
    {
      "Student_Name": "ronny",
         "Student_id": "4",
      "CourseID":  "6",
      "CourseName": "xyz"
    },
    {
      "Student_Name": "jaydeep",
         "Student_id": "4",
      "CourseID":  "5",
      "CourseName": "xyz"
    }
  ]';


  EXEC myprcedure__1 @json_1




  ----

  go

  create or alter procedure myprcedure__1  @myvar varchar(max) as
  select * into #tab from openjson(@myvar) with(
  s_name varchar(50) '$.Student_Name',
      s_id int '$.Student_id',
      c_id int '$.CourseID',
      c_name varchar(50) '$.CourseName'
  )
  insert into sudents_
  select s_id,s_name from #tab

  select * from sudents_

  insert into course
  select c_id,c_name from #tab

  select * from course



  ----

