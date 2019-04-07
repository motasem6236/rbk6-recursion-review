// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

//stringify Array
  function stringifyArr(arr){
    var str = [];
      for ( var k in obj ) {
        //recursion call for every element in the array
        str.push(stringifyJSON(obj[k])) ;
      }
    return "[" + str.join(",") + "]";
  }

  //stringify object
  function stingifyObj(object){
    var str = [];
    for ( var k in obj ){
      if ( obj[k] === undefined ||  typeof obj[k] === "function" ){
        break;
      } 
      //recursion call for every element in the object key and value
      str.push(stringifyJSON(k) + ":" + stringifyJSON( obj[k] ));
    } 
    return "{" + str.join(",") + "}";
  }

/// the main process deben on the type of obj 
  if ( Array.isArray(obj)) {
    return stringifyArr(obj);
  } else if(typeof obj === "object" && obj !== null){
    return stingifyObj(obj);
  } else if ( typeof obj === "string" ){
    return "\"" + obj + "\"";
   // check if obj  number, null, undefined, boolean        
	} else {
    return obj +"";
  }  	 
};
