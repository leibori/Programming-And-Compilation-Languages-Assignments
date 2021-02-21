//ori leibovitz 205793896 dvir Agaliyaho 205684798

//a 
//recursive fibonacci by using hashmap
// memofib input = nothing, output = calculate fibunacci function
var memoFib = () =>  {
	//global hashmap
  let memo = {};
	//the function itself
  function f(n) {
    var value;
	// if there is value in hash map in memo[n],put it in value 
    if (memo[n]) {
      value = memo[n];
    } else {
		//put value
      if (n <= 1)
        value = n;
      else {
		  //fibonacci
        value = f(n - 1) + f(n - 2);
      }
      memo[n] = value;
    }
    return value;
  }
  //return function
  return f;
}


//b
//factorial fibonacci by using hashmap 
// memoFac: input = nothing, output = calculate Factorial function
var memoFac = () => {
		//global hashmap
  let memo = {}
  //the function itself
  function f(n) {
	  //check value
    if (memo[n]) { return memo[n] } else {
		//factorial fibonacci
      if (n == 0) { memo[n] = 1 } else { memo[n] = n * f(n - 1) }
      return memo[n]
    }
  }
  return f;
}

funcFac = memoFac()
funcFib = memoFib()
console.log(funcFac(12))
console.log(funcFib(8))