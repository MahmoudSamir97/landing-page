const ul = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("[data-nav]");
const fragment = document.createDocumentFragment();

// create dynamic nav bar 

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
      section.scrollIntoView({behavior:'smooth'});    /* the method for smooth scrolling */
   })

   li.appendChild(anchorTag);
   fragment.appendChild(li);
   fragment.insertAdjac
})
ul.appendChild(fragment);


//  the second argument of call back function of observer constructor
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


// observe  individual sction when scrolling
window.addEventListener('scroll', () => {
   for (let section of sections){

      observer.observe(section);


   }
})

// testing performance 

console.log(performance.now());





























