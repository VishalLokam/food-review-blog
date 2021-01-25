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
     		"_id": "",
     		"fullName": "",
		"email": "",
      		"username": "",
        	"password": "",
      		"city": ""
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
  - If Login is successful
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
#### Get User Information by username
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/user/username/{name}
  *replace {name} with desired name to search*	
- Request Method:- GET
- Response:- 
  - If username was fully or partially correct:- https://obscure-fjord-67586.herokuapp.com/user/username/scott
  	*person with name scott is present in the database*
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
  - If characters don't match:- https://obscure-fjord-67586.herokuapp.com/user/username/aliyah
  	*person with name aliyah is not present in the database*
	```
	{
    		"message": "no user found"
	}
	```













