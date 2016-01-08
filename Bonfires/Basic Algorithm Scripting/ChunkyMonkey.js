function chunk(arr, size) {
  // Break it up.
  var multiarr = [];
  
  for (var i = 0;i<arr.length;i+=size){
    var sliced = arr.slice(i,size+i);
    multiarr.push(sliced);
  }
  
  return multiarr;
}

chunk(["a", "b", "c", "d"], 2);
