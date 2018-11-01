// objects 
// what objects could I need? game itself 
var words = [];

// generate word from the list
function get_word() {
  var play_word = words[Math.floor(Math.random() * 8181)].toUpperCase();
  //console.log(words + "/" + Math.random()*6);
  console.log(play_word);
  return play_word;
}


// helper function to read the text file into an array
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                words = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}

// generate definition for a given word
function get_defenition(wrd) {
    const url = 'https://api.datamuse.com/words?sp=' + wrd + '&md=d';
    $.get(url, function(data, status){
        defenition(data[0].defs[0]);
    });

}