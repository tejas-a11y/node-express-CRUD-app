# 📦 Node-express-CRUD-app
A simple CRUD app made using node.js runtime, express framework and MYSQL database.

It includes-
* Getting data for all employees or by specific ID
* Creating A new employee by providing details in the body of client request
* Finding and updating an employee's record if exists & create if not
* And finally deleting employee's record by given ID

### ✍️ Author

Hey there! it's Tejas, an undergrad student who loves coding. I make personal coding projects in my free time.


## 🚀 Prerequisites

First off, before jumping right into building this we need some modules to make this.

```bash
npm i express body-parser mysql2
```

### 💻 Building the project

So I used body-parser middleware for parsing json and globally mounted it in index file using app.use()

Then I defined employeeRoutes under controller file to mount it for api path globally.

Controller file contains handler functions for `GET`, `POST`, `PUT` and `DELETE` methods.
Service functions themselves are handled in a specific service file in order to make the implementation simple and not exposing the model's logic to client side.

In the service file, SQL queries for each method explicitly except `PUT`.
Rather, a stored procedure is defined under MYSQL database for updating employee record by id and if not exists then creates the record for given employee.


That's all.
