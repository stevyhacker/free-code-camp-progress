function sumAll(arr) {
  var sum = arr[0]+arr[1];
  for (var i = Math.min(arr[0],arr[1])+1;i<Math.max(arr[0],arr[1]);i++){
    sum+=i;
  }
  return sum;
}

sumAll([1, 4]);