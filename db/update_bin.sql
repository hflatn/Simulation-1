UPDATE bin 
set name = $2, Price = $3
select * from bin
where id = $1;