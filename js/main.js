             /*Animate script which enable the menu button*/

    var menu=document.getElementById("button-menu");
    var icon=document.getElementById("hamb");     
    var ss=document.getElementById("menuLinks")
        
        var count=0; 
        menu.onclick=function(){
            if(count==0){
            icon.style.transform="rotate(90deg)";
            count=1;
            ss.style.display="inline-block";
            }
            else if(count==1){
            icon.style.transform="rotate(0deg)";
            count=0;
                ss.style.display="none";

            }
        }
            /*END Animate script which enable the menu button*/
        
        
               /*for clearing search form*/
  
 var d=document.getElementById("clear"); 
 var s=document.getElementById("input"); 
 var a=document.getElementById("search"); 
 d.onclick=function(){
     s.value=""
 }
 a.onclick=function(){
     s.value=""
 }
             /*End for clearing search form*/ 