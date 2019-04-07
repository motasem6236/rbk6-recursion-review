// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var str = "";

  if ( obj === undefined || typeof obj === "function" ){
  	return "";
  } else if( obj === null ){
  	str = "null";
  } else {

  	if ( Array.isArray(obj)) {
	   	str += "[";
	    
	    for ( var k in obj ) {
	      str += stringifyJSON(obj[k])  ;
	      if ( k < obj.length - 1 ){
	      	str += ",";
	      }
	    }
	    str += "]";
  	} else if ( typeof obj !== "object" ){

  	  	if ( typeof obj === "string" ){
      		str += "\"" + obj + "\"";
      	} else { 
      	 str += obj;
        }  

    } else {
    	
        str += "{";
        for ( var k in obj ){
        	if ( k === "undefined" ||  k === "functions" ){
  					str += "";
  			} else {
      	  		str += "\"" + k + "\":" + stringifyJSON( obj[k] )  ;
       			if ( k != Object.keys( obj )[Object.keys( obj ).length-1] ){
      				str += ","
          		}   
        	}
      	}
        str += "}";
      }
   }
  return str;
};
