CREATE TABLE person (
  	id integer primary key autoincrement ,
  	name text,
  	age integer,
  	height integer,
  	city text,
  	FavoriteColor text
 );
INSERT INTO person (name,age,height,city,FavoriteColor)
VALUES
  ('qais',26,190,'baghdad','black'),
  ('dallin',33,175,'dallas','blue'),
  ('cihan',26,170,'istanbul','pink'),
  ('samir',27,165,'baghdad','white'),
  ('tuba',20,172,'bolu','red');

  select name , height
  from person
  order by height desc;

  --------------------
  select name , age
from person
where age  > 23;
---------------
CREATE TABLE orders (
  	personid integer primary key autoincrement ,
  	productname text,
  	productprice integer,
  	quintity text

 )
 --------------
 insert into orders (productname,productprice,quintity)
values
('shirts',30,100),
('phones',300,200),
('laptops',50,150),
('wallets',10,30),
('watches',55,20)
------------
select sum(quintity)
from orders
-------------
select sum(productprice)
from orders
-------------
* Calculate the total Order Price By personId (If you only made orders for 1 person, go add more for the other people)

select (productprice * quintity)
from orders
-----------
Add 3 new Artists to the Artist table

insert into Artist (name)
values
('adele'),
('shakera'),
("guns an' roses")
---------------
* Select all artists that contain the word Black

select * from artist
order by name asc
limit 10 ;
--------------
insert into employee
(lastname,firstname)
values
('malik','qais'),
('nasir','daanish')
-----------------
select firstname , lastname , CITY
from employee
where city = "Calgary"
---------------
select sum(total)
from invoice
