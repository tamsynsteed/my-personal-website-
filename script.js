const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li"); //individual links

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        /*if links have animation on it*/ link.style.animation = "";
      } else {
        /*add animation*/
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
      //this is the delay between each link, the added value is the initial delay
    });
  });
};

navSlide();

/*make a function for transitioning nav*/
/*on click, nav should get a class list. toggle class list of "nav active"*/

/*when we click on the burger we want the nav link to get the class of nav active*/

/*evoke funciton*/

/*best practice: build an app function where you evoke all your fucntions to keep it neat*/
/* const app =()=>{
     SlideNav();
 }
 */
// Get the modal
/*var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; */

function openModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.style.display = "block";

  const closebutton = modal.getElementsByClassName("close")[0];

  closebutton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

//opening external link using javascript//
function myFunction() {
  if (id == "demo_lotto")
    window.open(
      "https://repl.it/@tamsynsteed/EOMPYTHONPROJECTLOTTERY-1#.replit"
    );
  else if (id == "git_lotto")
    window.open("https://github.com/tamsynsteed/EOM.PYTHON.PROJECT.LOTTERY");
}
