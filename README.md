# food-review-blog
## Usage 
### User
#### Add user
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/register
- Request Method:- POST
- Request body:- 
```
{
	"fullName": "",
	"email": "",
      	"username": "",
        "password": "",
      	"city": ""
}
```
*All the fields are required.*

- Response:-
  - If user registration is successful
  ```
  {
    "message": "User registration successful"
  }
  ```
  - If username already exists
  ```
  {
    "message": "User exists"
  }
  ```

####User Login
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/login
- Request Method:- POST
- Request body:- 
```
{
        "username": "sadsongs",
        "password": "qwerty"
}
```
*All the fields are required.*
- Response:-
   - If Login is successful
  ```
  {
    "message": "login successful"
  }
  ```
  - If username is wrong
  ```
  {
    "message": "Username not Found"
  }
  ```
  - If password is wrong
  ```
  {
    "message": "password doesn't match"
  }
  ```













