UPDATE bin
set name = $3, price = $4
where id = $1 and shelf = $2;
