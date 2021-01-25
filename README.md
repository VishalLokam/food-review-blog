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
    "message": "user exists"
  }
  ```
