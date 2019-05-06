# DCI Alumni Book

## Task
Create a basic alumni book portal for the [DCI Digital Career Institute](https://digitalcareerinstitute.org) with authentication and email confirmation, where user will have 3  roles:
1. Public (view all students cards)
2. User (personal profile with CRUD functionality )
3. Super user (manage all users - Approve student/Reject student's request/Delete Existing Student)


## Technology stack
* MERN Stack (React, MongoDB, Node.js, Express), JS, JWT, Nodemailer, CSS (Bootstrap, Semantic Ui)
  
## Prerequirements:
      * MongoDB
      * Node ^10.0.0
      * npm

## Usage

* Client-side usage(PORT: 3000)
  * $ cd student_portal_client
  * $ npm i                     // npm install pacakges

* Server-side usage(PORT: 8000)
    * $ cd student_portal_api
    * $ npm i   
    
    * Prepare your secret
      * The following should be added to the .env file:
        * JWT_SECRET
        * MongoDB connection url (**example**: 'mongodb://localhost/DB_NAME' or MLab URL)
        * Mail service credentials. In our project we used mailtrap. 
        
## Start
  * $ cd student_portal_api 
  * $ npm i                 
  * $ npm run dev 
  
  > Client and server runs concurrently
  
  
  
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: 0.18.0 | bcrypt: 3.0.4
bootstrap: 4.3.1 | bluebird: 3.5.3
gravatar-url: 2.0.0 | body-parser: 1.18.3
jwt-decode: 2.2.0 | concurrently: 4.1.0
node-sass: 4.12.0 | cors: 2.8.5
prop-types: 15.7.2 | dotenv: 7.0.0
react: 16.8.6 | express: 4.16.4
react-bootstrap: 1.0.0-beta.6 | jsonwebtoken: 8.5.1
react-datepicker: 2.4.0 | lodash: 4.17.11
react-dom: 16.8.6 | mongoose: 5.4.19
react-redux: 6.0.1 | mongoose-unique-validator: 2.0.2
react-router: 4.3.1 | multer: 1.4.1
react-router-dom: 4.3.1 | nodemailer: 5.1.1
react-scripts: 3.0.0 | nodemon: 1.18.10
react-select: 2.4.2 | uuid: 3.3.2
reactstrap: 7.1.0 | 
redux: 4.0.1 | 
redux-thunk: 2.3.0 | 
semantic-ui-css: 2.4.1 | 
semantic-ui-react: 0.86.0 | 
validator: 10.11.0 | 
