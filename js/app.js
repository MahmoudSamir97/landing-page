const ul = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("[data-nav]");
const fragment = document.createDocumentFragment();

 sections.forEach(function (section){
   const sectionId = section.getAttribute('id');
   const sectionTitle = section.getAttribute('data-nav');
   const li = document.createElement('li');
   const anchorTag = document.createElement('a');
   anchorTag.classList.add('menu__link');
   anchorTag.textContent = sectionTitle;
   anchorTag.href= `#${sectionId}`;
   anchorTag.addEventListener('click', function(e){
      e.preventDefault();
      section.scrollIntoView({
         behavior:'smooth'});
   })

   li.appendChild(anchorTag);
   fragment.appendChild(li);
   fragment.insertAdjac
})
ul.appendChild(fragment);



const options = {
root: null,
rootMargin: '0px',
threshold: 0.70
};
const observer = new IntersectionObserver((entries) => {
   const links = document.querySelectorAll('a');
   if (entries[0].isIntersecting){
      entries[0].target.classList.add('your-active-class');
// related to links
      links.forEach(link => {
         if (link.textContent === entries[0].target.dataset.nav){
            link.classList.add('active');
         } else {
            link.classList.remove('active');

         }
      })

// related to links


   } else { entries[0].target.classList.remove('your-active-class');}
}, options); 



window.addEventListener('scroll', () => {
   for (let section of sections){

      observer.observe(section);


   }
})

console.log(performance.now());





























/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active