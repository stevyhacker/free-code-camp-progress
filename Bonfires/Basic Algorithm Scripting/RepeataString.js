function repeat(str, num) {
  // repeat after me
  
  if(num<0){
    return "";
  }
  else {
    var string = "";
    for(var i =0;i<num;i++){
      string+=str;
    }
    return string;
  }
  
}

repeat("abc", 3);
