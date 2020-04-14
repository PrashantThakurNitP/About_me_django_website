/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
a="a1";
function myFunction(id) {
  if(id!=a)
    
  document.getElementById(a).classList.remove("show");
  document.getElementById(id).classList.toggle("show");
  window.a;
  a=id;
}
function removeClass(id){
  document.getElementById(id).classList.remove("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myfunction1(id)
{
  console.log(id);
 var a3=document.getElementById(id);
  a3.style.backgroundColor="#FF00FF";
  a3.style.borderRadius="4px"
}
function myfunction2(id)
{
 var a3=document.getElementById(id);
  a3.style.backgroundColor="#8A0651";
  a3.style.borderRadius="0px"
}