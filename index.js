// for arraw toggle
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    console.log(arrowParent)
 arrowParent.classList.toggle("showMenu");
  });
}
// sidebar functionality
// let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebarBtn);
// sidebarBtn.addEventListener("click", ()=>{
//   sidebar.classList.toggle("close");
// });


// For Tab Functionality

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabOptions");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }