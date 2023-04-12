/*
  Switch
    - is a conditional statement that evaluates an expression and 
    matches it to one of several possible cases
    - alternative for multiple 'if...else' statements

    syntax:
      switch(expression) {
        case value1:
          - case represents a possible match
          code to be executed if expression matches value
          break;
            - a point control is transferred to the end of the switch statement
        case value2:
          code to be executed if expression matches value
        default:
          code to be executed if no cases matched
      }
*/

let color = 'red';

switch (color) {
  case 'red':
    console.log('The color is red');
    break;
  // the break statement ensures that the code inside
  // the other cases is not executed
  case 'green':
    console.log('The color is green');
    break;
  case 'blue':
    console.log('The color is blue');
    break;
  default:
    console.log('The color is unknown');
}

function roleChecker(role) {
  switch (role) {
    case 'Admin':
      console.log('Welcome Admin, to the Dashboard');
      break;
    case 'User':
      console.log('You are not authorized to view this page.');
      break;
    /*
        break terminates the code block. If this was not added to your 
        case then, the next case will run as well. 
      */
    case 'Guest':
      console.log('Go to the registration page to register');
      break;
    default:
      console.log('Invalid role');
    /* 
        By default your switch ends with default case, so therefore, 
        even there is no break in your default case, it will not run anything else.
    */
  }
}

roleChecker('Guest');
