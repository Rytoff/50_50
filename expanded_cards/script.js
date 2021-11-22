const slides = document.querySelectorAll('.panel')
console.log(slides)

for (const slide of slides) {
  // const link =
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
    // document.body.style.backgroundImage = slide.style.backgroundImage
  })
}

function clearActiveClasses() {
  slides.forEach((item) => {
    item.classList.remove('active')
  })
}
