//https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
/*
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial
song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");

*/



//my solution
function songDecoder(song){
  song = song.replace(/WUB/g, ' ').replace(/ +(?= )/g,'');
  if (song[0] === ' ') {
    song = song.substr(1);
  }
  if (song[song.length-1] === ' ') {
    song = song.substring(0, song.length - 1)
  }
  return song;
}

//best solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}