// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // declare result
  var result = [];

  var traverseDOM = function(node, callback) {
    while (node) {
      var nodeList = node.childNodes;
      if (nodeList[0]) {
        callback(nodeList[0]);
        traverseDOM();
      }
    }
    // if the node has children
    // recurse through the node's children
    //otherwise run the callback on the node and return
    //callback:
    // if the nodeList is empty, check if the className is what we want
    //node.classList[0] === "className"
    // if it IS what we want, push it to our result array


  };
  //DOM traversal helper function
  // input: node, callback
  // output: a node that has no children, and has the specified class name

  traveseDOM(element, function () {
    // callback function here
  });

  return result;
};
