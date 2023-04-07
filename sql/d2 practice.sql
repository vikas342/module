CREATE TABLE cars_2(
    id int PRIMARY key IDENTITY(1,1),
    Brand VARCHAR(50),
    NAME VARCHAR(50)

)

ALTER TABLE cars_2
add price int

UPDATE cars_2 set price=27890
WHERE id= 1


INSERT into cars_2 values('Ford','Mustang',27890)
INSERT into cars_2 values('BMW','M5',41790)

---p1 DML

SELECT * from cars_2


INSERT into cars_2 values('gfg','xfgd')


UPDATE cars_2 set Brand='Dodge',NAME='Charger'
WHERE id= 3


DELETE cars_2 

DROP TABLE cars_2


---P2 DQL


SELECT CONCAT(Brand,' ',NAME) AS CAR from cars_2


SELECT COUNT(ID) AS TOTAL_CARS FROM cars_2
SELECT avg(price) AS avg FROM cars_2
SELECT max(price) AS max FROM cars_2
SELECT min(price) AS min FROM cars_2




select * from cars_2;

select id,NAME,price from cars_2
where price in (select max(price) from cars_2)

select id,NAME,price from cars_2
where price not in (select max(price) from cars_2)

select id,NAME,price from cars_2
where price >=31000

select id,NAME,price from cars_2
where price <=31000

select id,NAME,price from cars_2
where price =31000


select * from cars_2
where brand like '%o%'



select * from cars_2
where brand like 'f%'


select * from cars_2
where brand like '%e'


select * from cars_2 order by brand;
select * from cars_2 order by price desc;


select top 2 * from cars_2 order by price desc;


select brand from cars_2
UNION
select name from cars_2


---cte






----p3 String Functions




select ASCII('a')

select CHAR(65)

select CHARINDEX('i','vikassonwane')

select CONCAT('vikas','','sonwane')

SELECT 'vikas' + 'sonwane'


select FORMAT (1234565,'##-##-####')

select left('vikassonwane',3)

select LEN ('vikassonwane')

select LOWER('VIKAS')

select LTRIM('  VIKAS')

select PATINDEX('%son%','vikassonwane')

select REPLACE('vikassonwane','vikas','VIKAS')

select SOUNDEX('hello')

select REPLICATE('VIKAS',5)

select REVERSE('vikassonwane')

select UNICODE('vikassonwane')

select TRIM('  vikassonwane   ')

select SUBSTRING('vikassonwane',2,6)

select STR(342)



----DATE FUNCTIONS  P4


 SELECT DATEADD(MM,5,'2023-02-01')

select DATENAME(MONTH,CONVERT(datetime,'2001-06-01'))

select GETDATE()

select DAY('2001-06-01')

--Math Function
select CEILING(0.34)

select FLOOR(0.45)


select EXP(3)


select POWER(8,2)

select ROUND(324.255,2)

--Ranking Function


select * from cars_2;


select DENSE_RANK() over (order by Name DESC) AS DENSE_RANK,*
FROM cars_2


select RANK() over (order by Name DESC) AS RANK,*
FROM cars_2

select ROW_NUMBER() over (order by Name DESC) AS ROW_NUMBER,*
FROM cars_2


--system function
select HOST_ID()


SELECT HOST_NAME()
