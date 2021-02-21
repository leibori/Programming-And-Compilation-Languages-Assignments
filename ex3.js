//ori leibovitz 205793896 dvir Agaliyaho 205684798
//using memory funcrion
// memoize: input = function, output = memorized function
var memoize = (func) => {
	//global hash

 
 let cache = {}
  return function(n) {
    if (n in cache) {
      return cache[n]
    }
	// run func and put value in val
    let val = func(n)
    cache[n] = val
    return val
  };
}
//factorial func as before
// factorial: input = nominal number, output = nominal number
var factorial = function(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * g(num - 1);
  }
}

var g = memoize(factorial);
	console.log(g(12))
