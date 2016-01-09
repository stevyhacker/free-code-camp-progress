function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function isValid(value){
    switch(value){
      case false:
      case null:
      case 0:
      case "":
      case undefined:
      case NaN:
        return false;
      default:
        return true;
    }
  }
  
  var filtered = arr.filter(isValid);
  
  if(filtered.length==1){
    return [];
  }
  
  return filtered ;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
