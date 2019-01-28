# table 1
sequelize model:generate --name session \
 --attributes expires:date,data:string

# table 2
sequelize model:generate --name user \
 --attributes username:string,password:string,age:integer,weight:integer,gender:string