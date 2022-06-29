# matilda

## Project Description  

## Project Setup 

### Dependencies

- Run `npm install` in the project folder to install dependencies related to Express.

- `cd client` and run `npm install` to install dependencies related to React.


### Database

- Create `.env` file in project directory and add:

```
DB_NAME=books
DB_PASS=YOUR_PASSWORD
```
- Type `mysql -u root -p` to access the MySQL CLI using your password.

- In the MySQL CLI, type `create database books;` to create a database in MySQL.

- In the MySQL CLI, type `npm run migrate;` to create all the tables.


### Development Servers

- Run `npm start` in project directory to start the Express server on port 5000.
- `cd client` and run `npm start` to start client server in port 3000.

### Technologies

## Frontend
- React
- Axios
- Tailwind CSS
- react-toastify
- react-icons 
- react-router-dom
- react-currency-format

## Backend
- MySQL 
- Node.js
- Express.js
- JSON Web Token 


## DB Schema  


## Notes

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._