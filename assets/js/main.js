import portfolioProjects from "../data/portfolio_data.js"
/* =====================================================
   ELEMENTS
===================================================== */
const elements=  {
   modals: document.querySelectorAll(".modal"),
   overlay: document.querySelectorAll(".overlay"),
   serviceModal: {
      triggerCards: document.querySelectorAll(".skills_box"),
      modal: document.querySelector(".services_modal"),
      overlay: document.querySelector(".services_modal_overlay"),
      closeIcon:  document.querySelector(".services_modal_cross_icon"),
   },
   portfolioModal: {
      modal: document.querySelector(".portfolio_project_modal"),
      overlay: document.querySelector(".project_modal_overlay"),
      closeIcon:  document.querySelector(".portfolio_modal_cross_icon"),
   }
   
}
/* =====================================================
   Resume section tabs and tab contents
===================================================== */
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */
// Generate portfolio cards
const portfolioHTML = portfolioProjects.map(project => 
   ` 
   <div class="portfolio_project card">
            <img
              src="${project.img}"
              alt="project preview"
              class="project_img"
            />
            <div class="project_texts_wrap">
              <p class="project_category_txt">${project.category}</p>
              <p class="project_title_txt">${project.type}</p>
            </div>
          </div>
          `
).join("")
document.querySelector(".portfolio_projects_grid").innerHTML = portfolioHTML
elements.portfolioModal.triggerCards = document.querySelectorAll(".portfolio_project")

// Generate portfolio modal as per the project
// Filter portfolio cards according to portfolio tabs.
/* =====================================================
   Modals open/close function
===================================================== */

// function addEvent(element, event, callback){
// element.addEventListener(event, callback)
// }

// function toggleModal (modal, overlay, modalCloseIcon, triggerCards) {
//    let triggers = [overlay, modalCloseIcon, ...triggerCards ]
//    triggers.forEach((trigger) => {
//      addEvent(trigger, 'click', () => {
//        document.body.classList.toggle("oveflow_hidden")
//        modal.classList.toggle('invisible')
//        overlay.classList.toggle('invisible')
//      })
//    })

// }
// toggleModal(
//    elements.serviceModal.modal,
//    elements.serviceModal.overlay,
//    elements.serviceModal.closeIcon,
//    Array.from(elements.serviceModal.triggerCards),
//  )
//  toggleModal(
//    elements.portfolioModal.modal,
//    elements.portfolioModal.overlay,
//    elements.portfolioModal.closeIcon,
//    Array.from(elements.portfolioModal.triggerCards),
//  )

/* =====================================================
   Testimonial Swiper
===================================================== */
const swiper = new Swiper(".testimonials_swiper", {
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   slidesPerView: 1
})
/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
document.querySelector("form").addEventListener("sumit", (evt)=>{
//   console.log("hi")
//    evt.preventDefault()
})
  console.log("hi")

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.