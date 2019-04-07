// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // the root node 
  var element = element || document.body;
  var res=[]; 
  // check the node type
  if (element.nodeType === 1) {
    // if node has the class name add it to the res array
	  if (element.classList.contains(className)) {
	  	res.push(element)
	  }	  	
	  for (var i = 0; i < element.childNodes.length; i++) {
      // hold the result of the recurion and add it to res array /
      // res.concat(temArr) didn't work can you tested if you read this
      var temArr = getElementsByClassName(className,element.childNodes[i]);
      if (temArr.length > 0) {
        for (var j = 0; j < temArr.length; j++) {
          res.push(temArr[j]);
        }
  	  }
  	}
  }
  return res;
}