
---p1


create Table countries (
	
	country_id int not null identity(1,3) primary key ,
	 country_name varchar(50),
	region_id  int not null unique 


);


select * from countries

Insert Into countries values('India',1);

Insert Into countries values('Italy',22);

Insert Into countries values('China',2);



drop table  countries


---p2

create table job_history (


employee_id  int not null primary key identity(1,1), 
starting_date date, 
end_date date, 
job_id  int not null,
department_id int not null,


)

select * from job_history

insert into job_history values('2022-10-12','2023-12-12',1,11)



create table jobs(

 job_id int  primary key identity(1,1)	,
 job_title	varchar(55) default 'TESTER',
 min_salary  int default 8000,
 max_salary int default null,
  
)




insert into jobs values(DEFAULT, DEFAULT, DEFAULT);

INSERT INTO jobs VALUES('SOFTWARE DEVLOPER',122000,555550);
INSERT INTO jobs VALUES('TESTER',100000,250000);


select * from jobs


drop table jobs



----P4


create table department(

 d_id int  primary key identity(1,1)	,
 d_name	varchar(55) 

  
)

create table jobs(

 job_id int  primary key identity(1,1)	,
 job_title	varchar(55) default 'TESTER',
 min_salary  int default 8000,
 max_salary int default null,
  
)

select * from jobs


create table employees (

 employee_id int  primary key identity(1,1)	,
 first_name	varchar(55) ,
 last_name  VARCHAR(55),
 email  VARCHAR(55),
 phone_number   VARCHAR(55),
 hire_date  date,
 salary int,
 commission int,
 manager_id  int,
 department_id  int foreign key (department_id) references department(d_id),
 job_id int foreign key (job_id) references jobs(job_id)

  
)





---assignment 1




CREATE table emp(
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(100) NOT NULL ,
)

DROP TABLE emp


SELECT * FROM emp

ALTER TABLE emp
	ADD salary int 



CREATE TABLE inventory(
	pid INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	pname VARCHAR(100) NOT NULL,

)


SELECT * FROM inventory
DROP TABLE inventory


CREATE TABLE sales_data(
	pid INT FOREIGN KEY (pid) REFERENCES inventory(pid),

	salesman_id INT FOREIGN KEY (salesman_id) REFERENCES emp(id),
	commision int NOT NULL
)


create table demo(
	pid INT FOREIGN KEY (pid) REFERENCES inventory(pid),
	eid INT FOREIGN KEY (eid) REFERENCES emp(id),
	salary int ,
	commision as (salary * 0.1)

);

SELECT * FROM sales_data

drop TABLE sales_data




INSERT into emp VALUES('vikas',10000)
INSERT into emp VALUES('jay',15000)
INSERT into emp VALUES('preet',11000)
INSERT into emp VALUES('vinit',17000)
INSERT into emp VALUES('dharmik',25000)
INSERT into emp VALUES('happy',35000)
INSERT into emp VALUES('rahul',19000)

INSERT into inventory VALUES('raptor')
INSERT into inventory VALUES('Charger')
INSERT into inventory VALUES('mustang')
INSERT into inventory VALUES('corvette')


INSERT into sales_data VALUES(4,2,10000)
INSERT into sales_data VALUES(1,1,54155)
INSERT into sales_data VALUES(2,3,10000)
INSERT into sales_data VALUES(3,4,10000)
INSERT into sales_data VALUES(3,7,10000)
INSERT into sales_data VALUES(1,6,10000)
INSERT into sales_data VALUES(4,5,10000)
