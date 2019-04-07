// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = "";
    // check obj if it array
  	if ( Array.isArray(obj)) {
	   	str += "[";
	    
	    for ( var k in obj ) {
	      str += stringifyJSON(obj[k])  ;
	      if ( k < obj.length - 1 ){
	      	str += ",";
	      }
	    }
	    str += "]";
      // check if obj string, number, null, undefined, boolean 
  	} else if ( typeof obj !== "object" || obj === null){

  	  	if ( typeof obj === "string" ){
      		str += "\"" + obj + "\"";
      	} else { 
      	 str += obj;
        }  
        // if obj is object
    } else {

        str += "{";
        for ( var k in obj ){
        	if ( obj[k] === undefined ||  typeof obj[k] === "function" ){
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
      
  return str;
};
