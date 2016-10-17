// Goal: given multiple arguments, remove all elements from the initial array (first argument) that are the same value as the remaining arguments.

function destroyer(arr) {
  // since you will be passing in multiple arguments, work with the "arguments object"
  // do not include first argument...which is the array of numbers.
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);


  // create a function to pass into the filter method
  // if the element in the array is not equal to the target, save the element
  var savedValues = arr.filter(function (element) {
    return args.indexOf(element) === -1;
  });

  return savedValues;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// expected output of the above is [1,1]


// solution
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
