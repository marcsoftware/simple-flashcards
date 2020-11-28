//-----------------------------------------------------------------------------
// german has special letters like ä ö ü ß Ä Ö Ü 
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