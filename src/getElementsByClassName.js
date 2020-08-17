// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];

  var traverseDOM = function(node, callback) {
    console.log(`node: ${node}`);
    console.log(`classList: ${node.classList}`);
    while (node) {
      if (node.childNodes[0] !== undefined) {
        traverseDOM(node.childNodes[0], callback);
      } else {
        return callback(node);
      }
    }
  };

  var lookForClassName = function (element) {
    if (element.classList[className]) {
      result.push(element);
    }
  };

  traverseDOM(document.body, lookForClassName);

  return result;
};
