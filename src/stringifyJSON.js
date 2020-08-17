// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here askdfjhaslkdjgheriughaSDHJHJHJAHSUH

  // declare result
  let result = '';

  // if object is empty, return '{}';
  // if object is empty array (isArray and length === 0), return '[]'
  if (obj === {}) {
    return '{}';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (obj === null) {
    return 'null';
  }

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
    result += `"${obj}"`;
  } else if (Array.isArray(obj)) {
    result += '[';

    for (let i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      result += ',';
    }

    result = result.slice(0, -1) + ']';
  } else if (typeof obj === 'object') {
    result += '{';

    for (let key in obj) {
      result += `${stringifyJSON(key)}:${stringifyJSON(obj[key])}`;
    }

    result = result.slice(0, -1) + '}';
  }
  return result;
};

