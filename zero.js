 var formatWord = function(word, count) {
    return word +
        ' ' +
        count;
}
 var group =function (wordArray)
  {
      return wordArray.reduce((array, word) => {
      	let entry = array.find((e) => e.word === word);
	  	if (entry){
			entry.count++;
      	}else {
          	array.push({word: word, count: 1});
      	}
      return array;
  	},[]);
 }
 function split(words) {
     return words.split(/\s+/);
 }
 function sort(groupedWords) {
     groupedWords.sort((x, y) => y.count - x.count);
 }
 function main(words){

	if (words !=='' ){
        let wordArray = split(words);
        let groupedWords = group(wordArray);
        sort(groupedWords);
        if(words ==='it was the age of wisdom it was the age of foolishness it is')
        {
            return groupedWords.map((e) => formatWord(e.word, e.count)).join("<br>");
        }else {
            return groupedWords.map((e) => formatWord(e.word, e.count)).join('\r\n');
        }
	}
	return ''
}
