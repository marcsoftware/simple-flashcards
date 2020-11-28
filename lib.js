//-----------------------------------------------------------------------------
// german has special letters like äöüßÄÖÜ 
// this function takes m`ar`s and turns it to mäß
//  example : m`ar`s => mäß
//-----------------------------------------------------------------------------
function interpolate(text){
    text=text.replace(";a","ä");
    text=text.replace(";o","ö");
    text=text.replace(";u","ü");
    text=text.replace(";s","ß");
    text=text.replace(";A","Ä");
    text=text.replace(";O","ß");
    text=text.replace(";U","Ü");
    return text;
}

//-----------------------------------------------------------------------------
// play audio
//-----------------------------------------------------------------------------
function playAudio(word){

  var audio = new Audio("audio-de/"+word.trim()+".wav");
  try{
    audio.play();
  }catch(e){
    console.log("USER MUST ENABLE AUTO PLAY!!!!!!!!!!!!!!!!");
    console.log(e);
  }

}