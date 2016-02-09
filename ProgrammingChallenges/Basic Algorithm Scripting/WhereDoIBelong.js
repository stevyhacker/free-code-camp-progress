function where(arr, num) {
  // Find my place in this sorted array.
  function compareNumbers(a,b){
    return a-b;
  }
  
  if(arr.indexOf(num)==-1){
      arr.push(num);  
  }
  arr.sort(compareNumbers);
  return arr.indexOf(num);
}


where([3, 10, 5], 3);