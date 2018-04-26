## About

This project is an `Online Cryptocurrency Portfolio Management System`, that allows users to create and manage their portfolio online. One place to keep track of all your current and future investments (now tracking `ICO's` too).

## Problem Statement

With the advent of [cryptocurrency trading](https://dl.acm.org/citation.cfm?id=2717097), almost a decade after the first introduction of bitcoin to the world, a lot has changed. Prices of some of the cryptocurrency has skyrocketed due to more & more people from general masses joining the bandwagon of investing/trading. Most of the time however investing of cryptocurrency happens at different exchanges due to the lack of one unified portal.This has given rise to the need for this kind of product that allows users to keep track of their investment across various [exchanges](https://www.coinbase.com/) and [hardware wallet](https://www.ledgerwallet.com/). 

## Proposed solution

`Online Cryptocurrency Portfolio Management System` is an online tool that allows users to create, manage and keep track of their investments across different exchanges. The tool also provides real time prices of some 100 cryptocurrencies. Not only this, users can assign portfolio managers to buy crypto on their behalf.

## Project Hosted online 

* [Cryptocurrency Management System](http://cyrptomanagesystem-env.us-east-1.elasticbeanstalk.com/)
* Following users has already been created for you : 
  - alice/alice - Customer (Normal user on the system)
  - bob/bob - Portfolio Manager on the system.
  - admin/admin - Admin of the system. Can perform all the CRUD operations
  
  
  ## How to setup project locally :
  
  * Clone the repository : 
  ```
  $ git clone https://github.com/saurabhsingh13no/cs5200-spring-2018-singh-saurabh.git
  ```
  
  * Connect to the Amazon RDS database (used in this project) using username/password in application.properties file using MySQLWorkBench
  * Create admin/admin and alice/alice using below 2 queries
 ```
 insert into person (dtype, email, first_name, last_name, `password`, phone, username) values ('admin', 'admin@gmail.com', 'admin', 'admin', 'admin', '8574158710', 'admin');
```
```
insert into customer (email, first_name, last_name, `password`, phone, username) values ('alice@gmail.com', 'Alice', 'Wonderland', 'alice', '8574158310', 'alice');

```



* For more information : [Click here](https://github.com/saurabhsingh13no/cs5200-spring-2018-singh-saurabh/wiki/Project)


## You tube video : 

Video on YouTube where I present and demonstrate my project. Video includes the following:
* [1 minute introduction](https://youtu.be/jj5oaPVqLq8)
* [1 minute problem statement](https://youtu.be/fqdcDSohOVI)
* [1 minute solution statement](https://youtu.be/zfWMhoKl4NI)
* [1 minute architecture and technology stack](https://youtu.be/32d3d4bt888)
* [1 minute data model](https://youtu.be/xOF0qi3SDYU)
* [5 to 10 minute demo: briefly show how to use your Web application and highlight the various features](https://youtu.be/HYqbj7W_lrA)

