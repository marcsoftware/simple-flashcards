//-----------------------------------------------------------------------
//
//-----------------------------------------------------------------------
function setCookie(name,value) {
  
  localStorage.setItem(name,value);
  

}

//-----------------------------------------------------------------------
//
//-----------------------------------------------------------------------
function getCookie(name) {

var p=0;
     try{
      p = localStorage.getItem(name); 
   }catch(e){
      p=0;
   }
   p=parseInt(p)
   
if(isNaN(p)){
  return 0;  
}

   return parseInt(p);
    

  
}
