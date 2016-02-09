function mutation(arr) {
  
  var charsFirstWord = arr[0].toLowerCase();
  var charsSecondWord = arr[1].toLowerCase().split("");
  var bool = false;
  var counter = 0;
  for(var i = 0;i<charsSecondWord.length;i++){
    if(charsFirstWord.indexOf(charsSecondWord[i])==-1){
      return false;
    }  
  }
  
  
  return true;
}

mutation(["hello", "hey"]);
