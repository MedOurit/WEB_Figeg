// Wow Animation JS Start
new WOW().init(); 
 

const targetDiv = document.getElementById("nav_mob");
const btn = document.getElementById("icon_bar");
const btn_close = document.getElementById("icon_close");



btn.onclick = function () {
    
    targetDiv.style.display = "grid";
    btn.style.display = "none";
};
btn_close.onclick = function () {
    targetDiv.style.display = "none";
    btn.style.display = "block";
};

function showMOb() {
    if (window.innerWidth < 991) { // If media query matches
        
        btn.style.display="block";
        
    }
  }
function myFunction() {
    if (window.innerWidth > 991) { // If media query matches
       
        targetDiv.style.display = "none";
    }
  }
  
 
  window.addEventListener('resize', myFunction);
  window.addEventListener('resize', showMOb);
//navbar end 




