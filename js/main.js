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
