const tc = document.querySelector('.testimonial-container')
const t = document.querySelector('.testimonial')
const ui = document.querySelector('.user-image')


const un = document.querySelector('.user-name')

const r = document.querySelector('.user-role')

async function updateTestimonial() {
  const url = 'https://randomuser.me/api/'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.results)
  ui.setAttribute('src', data.results[0].picture['large'])
  un.innerText = `${data.results[0].name['first']} ${data.results[0].name['last']}`
}
setInterval(updateTestimonial, 10000)


