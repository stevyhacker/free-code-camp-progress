function titleCase(str) {
  
   var words = str.toLowerCase().split(" ");
  
  for (var i = 0;i<words.length;i++ ){
      var oneWord=words[i].split("");
      oneWord[0] = oneWord[0].toUpperCase();
      words[i]=oneWord.join("");

  }
  
  
  return words.join(" ");
}

titleCase("I'm a little tea pot");
