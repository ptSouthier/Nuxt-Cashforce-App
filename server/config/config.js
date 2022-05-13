require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD || "rootpw",
    "database": "cashforce_v3",
    "host": "127.0.0.1",
    "port": process.env.DATABASE_PORT || 3307,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD || "rootpw",
    "database": "cashforce_v3",
    "host": "127.0.0.1",
    "port": process.env.DATABASE_PORT || 3307,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD || "rootpw",
    "database": "cashforce_v3",
    "host": "127.0.0.1",
    "port": process.env.DATABASE_PORT || 3307,
    "dialect": "mysql"
  }
}
