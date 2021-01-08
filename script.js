const navSlide = () => {
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.nav-links');
     const navLinks = document.querySelectorAll('.nav-links li') //individual links
     
    //toggle nav
     burger.addEventListener('click',()=>{
         nav.classList.toggle('nav-active');
        
    
     //animate links
     navLinks.forEach((link,index) => {
         if (link.style.animation)/*if links have animation on it*/ {
             link.style.animation = ''
         } else {
             /*add animation*/
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
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
