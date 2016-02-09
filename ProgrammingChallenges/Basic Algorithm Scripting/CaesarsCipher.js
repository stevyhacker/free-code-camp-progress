function rot13(str) { // LBH QVQ VG!
 var chars=str.split("");
  
  for(var i = 0;i<chars.length;i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
      if(str.charCodeAt(i)+13>90){
        var charCode = str.charCodeAt(i)+13-90+64;
        chars[i]=String.fromCharCode(charCode);
      }
      else {
          chars[i]=String.fromCharCode(str.charCodeAt(i)+13);
       }
    }
  }
  
  return chars.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
