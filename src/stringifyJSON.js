// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here askdfjhaslkdjgheriughaSDHJHJHJAHSUH

  // declare result
  let result = '';

  // check type of object
  // number - return stringified number
  // string - return string
  // boolean - return stringified boolean
  // null - the word 'null' stringified
  // undefined - undefined?

  // arrays - '[' + recurse through array and keep returning result for each index + ']';
  // objects - '{' + recurse through object and keep returning result for each index '}']
  if (typeof obj === 'number' ||
      typeof obj === 'boolean' ||
      typeof obj === 'null') {
    result += obj.toString();
  } else if (typeof obj === 'string') {
    result += obj;
  } else if (Array.isArray(obj)) {

  }

  return result;
};

