Port Number for MySQL server: 3307

cmd: mysql -u root -p -P 3307



Taxi project

https://www.youtube.com/playlist?list=PL0P9REiGk\_zZyJGstrTR8\_GutJ0sJz\_Fb



React Project

https://www.youtube.com/watch?v=nyXiKPK3sVk\&t=549s





Day 1



Project setup

Database design

Spring Boot backend

Authentication

CRUD for Company, Variant, Car



Day 2



React frontend

Connect APIs

Booking module

Admin Dashboard



Day 3



Payment (Dummy/Razorpay Test)

UI improvements

Validation

Deployment (optional)



### Backend

Project Name: Cars Rental Management System



Goal: A web application where customers can browse cars, book them, and make payments, while admins manage companies, car variants, cars, bookings, and customers.

| Module         | Admin        | Customer    |

| -------------- | ------------ | ----------- |

| Authentication | ✅          |  ✅         |

| Company        | CRUD         | View        |

| Car Variant    | CRUD         | View        |

| Car            | CRUD         | View/Search |

| Booking        | Approve/View | Book/Cancel |

| Payment        | View         | Pay         |

| Dashboard      | Analytics    | My Bookings |

| Profile        | Manage       | Manage      |



Roles:

`````

1\. Admin

Login

Dashboard

Manage Companies

Manage Variants

Manage Cars

Approve Bookings

View Payments

View Customers



2\. Customer

Register/Login

Browse Cars

View Car Details

Book Car

Upload License Number

Make Payment

View Booking History



Tables Required

\---------------

1\. Users

id INT(PK,NN,UQ,AI)

full\_name VARCHAR(100)

email VARCHAR(100)

password VARCHAR(255)

phone VARCHAR(15)

license\_number VARCHAR(30)

role ENUM(ADMIN/CUSTOMER)

created\_at TIMESTAMP



2\. Companies

id INT(PK,NN,AI)

company\_name VARCHAR(45)(NN,UQ)

logo\_url VARCHAR(255)

created\_at TIMESTAMP



3\. Variants

id INT(PK,NN,AI)

company\_id (FK) INT(NN,UQ)

variant\_name VARCHAR(100)

created\_at TIMESTAMP 

\--> Example: Company = Hyundai, Variant = Creta SX



4\. Cars

id INT (PK,NN,AI)

company\_id (FK) INT(NN)

variant\_id (FK) INT(NN)

registration\_number VARCHAR(45)

model\_year YEAR

color VARCHAR(45)

fuel\_type ENUM('PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID', 'CNG')

seats INT

price\_per\_day DOUBLE

image\_url VARCHAR(255)

status ENUM(AVAILABLE/BOOKED/MAINTENANCE)

created\_at TIMESTAMP



5\. Bookings

id INT(PK, NN)

user\_id (FK) INT(NN,UQ)

car\_id (FK) INT

pickup\_date DATE

return\_date DATE

total\_amount DOUBLE

booking\_status ENUM('PENDING', 'CONFIRMED', 'CANCELLED')

payment\_status ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED')

created\_at TIMESTAMP



6\. Payments

id INT(PK,NN,AI)

booking\_id (FK) INT(NN)

amount DOUBLE

payment\_method ENUM('CASH', 'CARD', 'UPI', 'NET\_BANKING')

transaction\_id VARCHAR(45)

payment\_status ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED')

payment\_date TIMESTAMP





Backend spring boot architecture:

Client(React) -> HTTP Request -> Controller -> Service -> Repository -> MySQL



Controller

\- receives requests from react

\- calls the Service

\- returns Response



Service

\- Contains the business logic

\- validate data

\- decides what should happen



Repository

\- Talks to db

\- performs CRUD operations



Entity - Java representation of db table(JPA and DI)



Folder structure

\----------------

src/main/java

\- controller

\- service

\- repository

\- enity

\- dto ()

\- config

\- exception

\- CarRentalApplication.java



Flow example: Customer clicks Book Car.

React

&#x20;  │

POST /bookings

&#x20;  │

BookingController

&#x20;  │

BookingService

&#x20;  │

BookingRepository

&#x20;  │

MySQL



\-------------------------------

| Dependency      | Purpose                                             

| --------------------------------------------------- |

| Spring Web      | Build REST APIs                                     |

| Spring Data JPA | Communicate with MySQL                              |

| MySQL Driver    | Connect to MySQL                                    |

| Lombok          | Reduces boilerplate (getters/setters, constructors) |

| Validation      | Validate request data (`@NotBlank`, `@Email`)       |



@Column is used when column name and variable name are different



LocalDateTime is used in Spring boot and TIMESTAMP in db, but here JPA automatically converts them like below:

LocalDateTime -> TIMESTAMP

String -> VARCHAR

Integer/ int -> INT

Boolean -> BOOLEAN



DTO = Data Transfer Object ✅

A DTO is an object used to transfer only the required data between layers (Client ↔ Backend or Backend ↔ Backend).

Benefits:

````````

✅ Hide sensitive fields (e.g., password, internal IDs)

✅ Accept only required data

✅ Validation (@NotBlank, @Email, etc.)

✅ Reduce data transferred

✅ Decouple API from database entities



\* we'll definitely use DTOs because these involve business logic and security.



``````````````````````````````

Validate User

&#x20;     ↓

Validate Car

&#x20;     ↓

Check Availability

&#x20;     ↓

Validate Dates

This is intentional.



We validate the cheapest and most fundamental things first before doing calculations or saving data.

This is exactly how production code is structured.



\* Suppose the frontend already validates the dates. Why do we validate them again in Spring Boot?

Ans: The frontend is under the user's control. Anyone can bypass React and call the API directly using Postman, curl, or a custom client. Therefore, the backend must never trust client input and should always perform its own validation.



The Controller should only handle HTTP requests/responses. The Service contains the business logic. This follows the Single Responsibility Principle (SRP) and keeps the code clean and maintainable.



| Operation                              | Status                         |

| -------------------------------------- | ------------------------------ |

| GET Success                            | `200 OK`                       |

| POST Success                           | `201 Created`                  |

| DELETE Success                         | `200 OK` (or `204 No Content`) |

| Invalid Request                        | `400 Bad Request`              |

| Resource Not Found                     | `404 Not Found`                |

| Duplicate Resource / Business Conflict | `409 Conflict`                 |



Booking

&#x20;   ↓

Payment Failed

&#x20;   ↓

Rollback

&#x20;   ↓

No Booking Saved (simple and best for the project)



common company pattern

React

&#x20;  │

Request DTO

&#x20;  │

Controller

&#x20;  │

Service

&#x20;  │

Entity

&#x20;  │

Repository

&#x20;  │

Database

\-----------

Database

&#x20;  │

Entity

&#x20;  │

Service

&#x20;  │

Response DTO

&#x20;  │

React



\# We created bookCar() instead of saveBooking() so that it gives meaning of booking a car that involves saving data along with calculations backend. A service like this should describe the business action, not the database operation.

Booking car flow:

Validate User

&#x20;     ↓

Validate Car

&#x20;     ↓

Check Availability

&#x20;     ↓

Validate Dates



\#Soft Delete ⭐⭐⭐⭐⭐

Instead of deleting, active = false

Most companies do this.

But... my project follows:

Don't allow deletion.

Instead:

User has bookings

&#x20;       ↓

Cannot Delete



Return - 409 CONFLICT

or

400 BAD REQUEST with User has active bookings



\# If your database column is NOT NULL, MySQL rejects it.

So the mapping exists.

The request is incomplete.



BookingRequest(User)

&#x20;       │

Find User

&#x20;       │

Find Car

&#x20;       │

Availability Check

&#x20;       │

Date Validation

&#x20;       │

Amount Calculation

&#x20;       │

Create Booking

&#x20;       │

Update Car Status

&#x20;       │

Save Booking



\# Mark user as inactive and make the bookings as old ones.

That's exactly what most companies do.



User

\-------

id = 5

active = false



Bookings remain:



Booking

\--------

User = 5

Status = COMPLETED



This preserves history for:



Auditing

Reports

Revenue analysis

Customer support



\# Compare these two methods.



CRUD

saveUser(user);

Very simple.



Business Service

bookCar(request);



↓



Find User

Find Car

Check Availability

Validate Dates

Calculate Amount

Save Booking

Update Car



This is exactly the difference between CRUD applications and enterprise applications.



\# @Transactional is used in bookCar() because it performs multiple database operations that must either all succeed or all fail together.



Example:



Save Booking

&#x20;     ↓

Update Car Status



Suppose:



Booking Saved ✅



Car Update ❌



Without @Transactional:



Booking Exists ❌



Car Still AVAILABLE ❌



Inconsistent database.



With @Transactional:



Booking ❌

Car Update ❌



Everything rolls back.



Notice the emphasis is multiple database operations, not just business logic.



\# Since the class has: @RequestMapping("/bookings")

and the method has:@PostMapping



Spring combines them as:

/bookings

If the method had:@PostMapping("/bookCar")

then the endpoint would become:/bookings/bookCar



\# Since the API only requires one simple value (paymentMethod), using @RequestParam keeps the API simple. If later the payment requires more details (card number, CVV, UPI ID, etc.), then we'd create a PaymentRequest DTO and use @RequestBody.



\# A complete interview answer would be:



We should not expose Entity classes directly because:



Security – Sensitive fields like password may be exposed.

API Stability – If the database schema changes, the API also changes.

Validation – DTOs allow request-specific validations.

Performance – We return only the required fields.

Separation of Concerns – Entity is for the database, DTO is for communication.



\# Login flow:

React

&#x20;  │

LoginRequestDTO

&#x20;  │

Controller

&#x20;  │

Service

&#x20;  │

Find User By Email

&#x20;  │

Check Password

&#x20;  │

Return Success / Failure



With JWT:

Login

&#x20;    │

Email + Password

&#x20;    │

Spring

&#x20;    │

Generate JWT

&#x20;    │

React stores token

&#x20;    │

Every API

&#x20;    │

Authorization: Bearer <token>

&#x20;    │

Spring validates token

&#x20;    │

Returns data



\# JWT vs Session

| Session                   | JWT                        |

| ------------------------- | -------------------------- |

| Stored on Server          | Stored on Client           |

| Server keeps session data | Server only verifies token |

| More server memory        | Scalable                   |

| Traditional web apps      | Modern REST APIs           |





\*\*#\*\* If a JWT is stolen, an attacker can use it to access protected APIs without logging in again because the server trusts a valid token. To reduce this risk, we use HTTPS, short-lived access tokens, refresh tokens, secure cookie storage (or secure client storage depending on architecture), and token expiration.



\# Why @RestControllerAdvice?

Think of it as a central error handler.

Without it:

UserService

&#x20;     ↓

Exception

&#x20;     ↓

Spring Default Error



With it:

UserService

&#x20;     ↓

Exception

&#x20;     ↓

GlobalExceptionHandler

&#x20;     ↓

Custom JSON Response



Every controller automatically uses this handler. That's why we don't write try-catch in every controller method.

\- @RestControllerAdvice provides centralized exception handling. Instead of writing repetitive try-catch blocks in every controller, we define exception handlers once in a reusable class. This improves maintainability, reduces code duplication, and ensures all APIs return a consistent error response.



\-----------------------------------------------------------

### Frontend

Why ESLint? (while creating app using terminal)

✅ It's the industry standard for React.

✅ It catches common mistakes before you run your code.

✅ It integrates well with VS Code.

✅ Nearly every React project uses it.



