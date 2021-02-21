//ori leibovitz 205793896 dvir Agaliyaho 205684798


// memoize get function as inout.
// input: function , output: memorize function
var memoize = (fn) => {
    // define hashmap as cache.
	let cache = {};
	// define function f that get veraity of arguments.
    function f(...args) {
		// generate key by using hash function on the arguments.
        let key = args;
		// in case we have solution in ceche, return the result.
        if (cache[key])
            return cache[key];
		//else, call function and save the result in ceche.
        let result = fn(...args);
        cache[key] = result;
        return result;
    }
    return f;
}
// multiply two numbers just for test it.
// input: 2 nominal numbers, output: nominal numbers
function test(x,y){
	return x * y
}


var g = memoize(test);
console.log(g(12,5))
//console.log(g(2,5))
