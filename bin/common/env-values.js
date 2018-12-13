module.exports = {
  mysqlDatabaseUrl: process.env.MYSQL_DATABASE_URL || process.env.JAWSDB_URL || process.env.CLEARDB_DATABASE_URL
}

update users set password="$2a$06$mZCCJRjEKAHOQv1buZy55us5bdcpKJFLHNe1nux9mk3ZwzZOzI8Ji" where id=1;  
update users set status="active" where id=1;
