# food-review-blog
## Usage 
[User](#user)
[Restaurant](#restaurant)
[Review](#review)
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
  - If user with given id is available:- https://obscure-fjord-67586.herokuapp.com/user/id/600ec4ff35b153000428df6c
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
#### Add restaurant/ Register restaurant/ Signup restaurant
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
  
  #### Get Restaurant Information by Restaurant name
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/restaurant/search/{restaurant_name}	
- Request Method:- GET
- Response:- 
  - If restaurant name was fully or partially correct:- https://obscure-fjord-67586.herokuapp.com/restaurant/search/chandu
  ```
  [
    {
        "_id": "60103f3892f698db300f880d",
        "restaurant_name": "Chandu Chai",
        "username": "ccpune",
        "password": "81dc9bdb52d04dc20036dbd8313ed055",
        "address": "10th street, high lane",
        "city": "Pune",
        "seating": 10,
        "__v": 0
    }
  ]
  ```

  - If characters don't match:- https://obscure-fjord-67586.herokuapp.com/restaurant/search/ziva
  ```
  {
      "message": "No restaurant found"
  }
  ```
  
  #### Get Restaurant Information by id
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/restaurant/id/{_id}
- Request Method:- GET
- Response:- 
  - If user with given id is available:- https://obscure-fjord-67586.herokuapp.com/restaurant/id/60103efd92f698db300f880c
  ```
  [
    {
        "_id": "60103efd92f698db300f880c",
        "restaurant_name": "Hotel Taj Mahal",
        "username": "htmdelhi",
        "password": "d8578edf8458ce06fbc5bb76a58c5ca4",
        "address": "12th street, view lane",
        "city": "Pune",
        "seating": 20,
        "__v": 0
    }
  ]
  ```
  - If id is not present
  ```
  {
      "message": "No restaurant found"
  }
  ```
  #### Get all the Restaurants in the City
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/restaurant/city/{city_name}
- Request Method:- GET
  - If restaurants in given city are available:- https://obscure-fjord-67586.herokuapp.com/restaurant/city/pune
  ```
  [
    {
        "_id": "60103efd92f698db300f880c",
        "restaurant_name": "Hotel Taj Mahal",
        "username": "htmdelhi",
        "password": "d8578edf8458ce06fbc5bb76a58c5ca4",
        "address": "12th street, view lane",
        "city": "Pune",
        "seating": 20,
        "__v": 0
    },
    {
        "_id": "60103f3892f698db300f880d",
        "restaurant_name": "Chandu Chai",
        "username": "ccpune",
        "password": "81dc9bdb52d04dc20036dbd8313ed055",
        "address": "10th street, high lane",
        "city": "Pune",
        "seating": 10,
        "__v": 0
    }
  ]
  ```
  - If there are no restaurants registered from the given city or name of the city is wrong 
  ```
  {
      "message": "No restaurant found in this city or name of the city is wrong"
  }
  ```

### Review
#### Add a review
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/review
- Request Method:- POST
- Request body:- 
```
{
        "title": "",
        "review": "",
        "restaurant_id": ""
          
}
```
*All the fields are required.*

- Response:-
  - If review is successfully uploaded
  ```
  {
      "message": "Review posted successfully"
  }
  ```
  - If restaurant_id is wrong or restaurant notfound
  ```
  {
      "message": "Restaurant not found or restaurant id is  wrong"
  }
  ```
  
 #### Get all the Reviews of restaurants in the City
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/review/city/{city_name}
- Request Method:- GET
  - If reviews in given city are available:- https://obscure-fjord-67586.herokuapp.com/review/city/hyderabad
  ```
  [
    {
        "likes": 0,
        "_id": "6010ea5f3dda7d28fdd38e25",
        "title": "Honest Review pizza",
        "review": "decent pizza, awesome shakes",
        "restaurant_id": "60103fbf92f698db300f880e",
        "city": "Hyderabad",
        "__v": 0
    },
    {
        "likes": 0,
        "_id": "6010eaa53dda7d28fdd38e26",
        "title": "Pizza review gone wrong",
        "review": "meh!! whatever it was ok",
        "restaurant_id": "60103fbf92f698db300f880e",
        "city": "Hyderabad",
        "__v": 0
    }
  ]
  ```
  - If there are no reviews for the restaurants in the city or name of the city is wrong 
  ```
  {
      "message": "No review found in this city or name of the city is wrong"
  }
  ``` 
  
  #### Get all the reviews of a particular restaurant
- Request URL:-	 https://obscure-fjord-67586.herokuapp.com/review/{restaurant_id}
- Request Method:- GET
  - If reviews in given city are available:- https://obscure-fjord-67586.herokuapp.com/review/601e33c8237fc30004db6fc5
  ```
  [
    {
        "likes": 0,
        "_id": "601e3505237fc30004db6fc6",
        "title": "Honest review2!!!",
        "review": "meh",
        "restaurant_id": "601e33c8237fc30004db6fc5",
        "city": "Pune",
        "__v": 0
    }
  ]
  ```
  - If there are no reviews for the restaurant 
  ```
  {
      "message": "No review found for this restaurant"
  }
  ``` 















