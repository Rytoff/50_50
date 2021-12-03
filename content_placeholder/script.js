const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const userName = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random/450x250" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, ipsa.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  userName.innerHTML = 'John Smith'
  date.innerHTML = 'Dec 03, 2021'
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
