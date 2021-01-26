# food-review-blog
## Usage 
### User
#### Add user/ Register user/ Signup user
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

#### User Login
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/login
- Request Method:- POST
- Request body:- 
```
{
    "username": "",
    "password": ""
}
```
*All the fields are required.*
- Response:-
  - If Login is successful, as a response user information is sent
 ```
 [
    	{
            "city": "",
            "_id": "",
            "fullName": "",
       	    "email": "",
            "username": "",
            "password": "",
            "__v": 
    	}
  ]
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
      "message": "Password doesn't match"
  }
  ```
#### Get User Information by username
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/username/{name}	
- Request Method:- GET
- Response:- 
  - If username was fully or partially correct:- https://obscure-fjord-67586.herokuapp.com/user/username/scott
  ```
  [
    	{
            "city": "Hyderabad",
            "_id": "600ec4ff35b153000428df6c",
            "fullName": "Scott Wade",
       	    "email": "scottwade@gmail.com",
            "username": "ScottWade",
            "password": "674f3c2c1a8a6f90461e8a66fb5550ba",
            "__v": 0
    	}
  ]
  ```
*person with name scott is present in the database*
  - If characters don't match:- https://obscure-fjord-67586.herokuapp.com/user/username/aliyah
  ```
  {
      "message": "no user found"
  }
  ```
*person with name aliyah is not present in the database*

#### Get User Information by id
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/id/{_id}
- Request Method:- GET
- Response:- 
  - If user with is available:- https://obscure-fjord-67586.herokuapp.com/user/id/600ec4ff35b153000428df6c
  ```
  [
    	{
            "city": "Hyderabad",
            "_id": "600ec4ff35b153000428df6c",
            "fullName": "Scott Wade",
       	    "email": "scottwade@gmail.com",
            "username": "ScottWade",
            "password": "674f3c2c1a8a6f90461e8a66fb5550ba",
            "__v": 0
    	}
  ]
  ```
  - If id is not present
  ```
  {
      "message": "no user found"
  }
  ```
  
  
  
### Restaurant
#### Add restaurant/ Register restaurant/ Signup restauratn
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/restaurant/register
- Request Method:- POST
- Request body:- 
```
{
        "restaurant_name": "",
        "username": "",
        "password": "",
        "address": "",
        "city": "",
        "seating": 
}
```
*All the fields are required. seating attribute takes a number*

- Response:-
  - If restaurant registration is successful
  ```
  {
      "message": "Restaurant registration successful"
  }
  ```
  - If username already exists
  ```
  {
      "message": "Username exists"
  }
  ```
  
  #### Restaurant Login
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/restaurant/login
- Request Method:- POST
- Request body:- 
```
{
    "username": "",
    "password": ""
}
```
*All the fields are required.*
- Response:-
  - If Login is successful, as a response restaurant information is sent
 ```
 [
    {
        "_id": "",
        "restaurant_name": "",
        "username": "",
        "password": "",
        "address": "",
        "city": "",
        "seating": ,
        "__v": 
    }
]
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
      "message": "Password doesn't match"
  }
  ```














