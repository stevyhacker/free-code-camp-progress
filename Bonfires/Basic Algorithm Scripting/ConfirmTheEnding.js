function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var substring = str.substr(-target.length);
  
  if(substring == target){
    return true;
  }
  else {
    return false;
  }
}

end("Bastian", "n");
