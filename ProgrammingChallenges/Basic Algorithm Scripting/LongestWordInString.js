function findLongestWord(str) {

  var words = str.split(" ");
  var longest=words[0].length;
  for (var i = 1;i<words.length;i++ ){
    if(longest<words[i].length){
      longest=words[i].length;
    }
  }
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");