![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name
Lab-01: TDD

### Author: Student/Group Name
Spencer Hirata

### Links and Resources
* [repo](https://github.com/401-advanced-js/lab-01)
* [travis](https://travis-ci.com/401-advanced-js/lab-01/pull_requests) NO CLUE HOW TO DO I THINK I MADE THE RIGHT LINK THOUGH

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `greet(string) -> string`
Appends string argument to 'hello '

###### `arithmetic.add(num,num) -> num`
Adds two numbers and returns the sum

###### `arithmetic.subtract(num,num) -> num`
Subtracts two numbers and returns the difference

###### `arithmetic.multiply(num,num) -> num`
Multiplies two numbers and returns the product

###### `arithmetic.divide(num,num) -> num`
Divides two numbers and returns the quotient

### Setup
####Dependencies
* eslint
* jest

#### Running the app
* `node index.js`

#### Tests
* Running the tests on the arithmetic and greet modules with `npm run test` in the main folder

  * Arithmetic
    -Add
    * Valid number => valid number return
    * Everything other than a number => returns null
    -Subtract
    * Valid number => valid number return
    * Everything other than a number => returns null
    -Multiply
    * Valid number => valid number return
    * Everything other than a number => returns null
    -Divide
    * Valid number => valid number return
    * Everything other than a number => returns null

  * Greet
    -Function
    * Valid string => returns string with 'hello ' at the beginning
    * Invalid input => returns null
    
#### UML
