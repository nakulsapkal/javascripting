/*## The challenge:  
   
  Create a file named function-arguments.js.  
   
  In that file, define a function named math that takes three arguments.  
  It's important for you to understand that arguments names are only used to  
  reference them.  
   
  Name each argument as you like.  
   
  Within the math function, return the value obtained from multiplying the  
  second and third arguments and adding that result to the first argument.  
   
  After that, inside the parentheses of console.log(), call the math()  
  function with the number 53 as first argument, the number 61 as second and  
  the number 67 as third argument.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify function-arguments.js*/


function math(number1, number2, number3) {
    number1 = number1 + (number2 * number3);
    return number1;
};

console.log(math(53, 61, 67));