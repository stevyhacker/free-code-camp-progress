function palindrome(str) {
  
  var current = str.toLowerCase().replace(/\s+/g,"").replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""); 
  var reverse = current.split("").reverse().join("");
  
  console.log(current);
  console.log(reverse);
  
  if(current == reverse ){
    return true;
  }
 else {
   return false;
 } 
}
palindrome("eye");
