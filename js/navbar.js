/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function change ()
{
  var elem = document.getElementById("follow")
  if (elem.innerHTML=="Follow") {
    elem.innerHTML = "Following";
    elem.style.backgroundColor = "#4CAF50";
  }

  else {
    elem.innerHTML = "Follow";
    elem.style.backgroundColor = "#008CBA";
  }

}
