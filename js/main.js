// header

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  header.classList.toggle("fixed", window.scrollY > 0)
})


// scroll

const headerLinks = document.querySelectorAll('.header__link'),
      logo = document.getElementById("logo"),
      burger = document.getElementById('burger'),
      overlay = document.getElementById('overlay'),
      headertNav = document.getElementById('headerNav')


headerLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick))

logo.addEventListener("click", e => {
  e.preventDefault()
  document.querySelector("main").scrollIntoView({
    behavior: "smooth"
  });
})

function navbarLinkClick(event){
  smoothScrool(event)
  removeClass()
}

function removeClass() {
  burger.classList.remove('active')
  overlay.classList.remove('show')
  headertNav.classList.remove('show')
}

// function smoothScrool(event){
//   event.preventDefault()

//   const targetId = event.currentTarget.getAttribute('href')

//   window.scrollTo({
//     top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
//     behavior: "smooth"
//   });

// }

function smoothScrool(event){
  event.preventDefault()

  const targetId = event.currentTarget.getAttribute('href')

  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth"
  });

}

// burger



burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  overlay.classList.toggle('show')
  headertNav.classList.toggle('show')
})

// my

const benefit = document.getElementById("benefit")


window.addEventListener("scroll", () => {
  if(window.scrollY > benefit.offsetTop){

  }
})

function headerLinkAddClassOnScroll() {

}



// tab

const tabsLink = document.querySelectorAll('#tabsLink'),
      tabContents = document.querySelectorAll('.tabcontent')

// За допомогою атрибута
// якщо атрибутове значення кнопки дорівнє значення атрибутового ім'я контенту то його показати

tabsLink.forEach(e => {
  e.addEventListener('click', btn => {
    let content = 0;
    tabsLink.forEach(btns => {
      btns.classList.remove('active')
    })
    btn.target.classList.add('active')

    while(content < tabContents.length){
      if(btn.target.getAttribute("data-tabLink") == tabContents[content].getAttribute("data-yoga")){
        tabContents[content].classList.add('show')
      } else{
        tabContents[content].classList.remove('show')
      }
      content++
    }
  })
})



// slider

$(function() {
  $('.coments').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    speed: 700,
    waitForAnimate: true,
    touchTreshold: 9,
    touchMove: false,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
});


// input

let checkInput = input => {
  if(input.value.length > 0){
    input.classList.add('active')
  } else {
    input.classList.remove('active')
  }
}

// fancy box

Fancybox.bind("[data-fancybox]", {

});

