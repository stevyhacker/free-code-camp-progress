function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var spliced= arr.splice(howMany);
  
  return spliced;
}

slasher([1, 2, 3], 2);
