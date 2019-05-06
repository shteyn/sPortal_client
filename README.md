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
