
/* 
let servicesBtn = document.querySelectorAll('.service-item');
let serviceDetail = document.querySelector('.services-right');

const getService = (category) => {
  const details = serviceData.find(item => item.category === category);
  serviceDetail.innerHTML = `
  <h3>${details.title}</h3>
  ${details.description.map(paragraph => "<p>" + paragraph + "</p>")}
  `
  console.log(details)
}

/*function getService(category) {
  const details = serviceData.find(item => item.category === category)
  console.log(details)
}

function reomoveActiveClass() {
  servicesBtn.forEach(button => {button.classList.remove('active')})
}

servicesBtn.forEach(item => {item.addEventListener('click', () => {
  reomoveActiveClass()
  const serviceClass = item.classList[1]
  getService(serviceClass)
  item.classList.add('active')
  //console.log(serviceClass)
})})

getService('Frontend')
*/


let servicesBtn = document.querySelectorAll('.service-item');
let serviceClass = document.querySelector('.services-right')

function activeClass(category) {
  let details = serviceData.find(item => item.category === category)
  serviceClass.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(
      paragraph => '<p>' + paragraph + '</p>'
    ).join(' ')}
  `
  console.log(details) 
}

function reomoveActiveClass() {
  servicesBtn.forEach(button => button.classList.remove('active'))
}

servicesBtn.forEach(item => {
  item.addEventListener('click', () => {
    reomoveActiveClass();
    let serviceData = item.classList[1]
    item.classList.add('active')
    activeClass(serviceData)
    //console.log(serviceData)
}) })

activeClass('Frontend')



//============== MIXITUP (projects)
/*
const containerEl = document.querySelector('.project-container')
var mixer = mixitup(containerEl, {
  animation: {
    enable: false
  }
});
mixer.filter('*');

*/

//==projects===
let projectbtn = document.querySelectorAll('.category')

function activebtn() {
  projectbtn.forEach(button => button.classList.remove('active'))
}

projectbtn.forEach(btn => {
  btn.addEventListener('click', () => {
    activebtn()
    let allBtn = btn.classList[1]
    btn.classList.add('active')
  })
})


//== on Nav Toggle (Small Screen)
const navMenu = document.querySelector('.nav-menu')
const navOpenBtn = document.querySelector('.nav-toggle-open')
const navCloseBtn = document.querySelector('.nav-toggle-close')

const openNavHandler = () => {
  navMenu.style.display = 'flex'
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block'
}

const closeNavHandler = () => {
  navMenu.style.display = 'none'
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none'
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

  //== close nav menu on click of nav link on small screen

const navItems = navMenu.querySelectorAll('a');  
if(window.innerWidth < 768) {
  navItems.forEach(item => {
    item.addEventListener('click', closeNavHandler)
  })
}




//==============SwiperJs (testimonials)
const swiper = new Swiper('.swiper', {
  //== on mobile view
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  
    //== on desktops view
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
  });
  


  //== theme toggle (light and dark)
  const themeBtn = document.querySelector('.nav-theme-btn');
  themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
      bodyClass = 'dark';
      document.body.className = bodyClass
      // change toggle icon
      themeBtn.innerHTML = '<i class="uil uil-sun"></i>'
      //save theme to local storage
      window.localStorage.setItem('theme', bodyClass);
    } else {
      bodyClass = '';
      document.body.className = bodyClass;
      // change toggle icon
      themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
      //save theme to local storage
      window.localStorage.setItem('theme', bodyClass);
    }
  })
  
  //load theme on load
  window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme')
  })
  
