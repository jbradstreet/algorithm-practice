// Goal: remove all falsy values from an array


function bouncer(arr) {

  // to utilze arr.filter(callbackfn); I need a callback function to pass in as a parameter
  function keepTruthy(value) {
    if (value !== false) {
      return value;
    }
  }

  var bounceFalsy = arr.filter(keepTruthy);
  return bounceFalsy;


}

bouncer([7, "ate", "", false, 9]);


// solution
function bouncer(arr) {
  return arr.filter(Boolean);
}
