const hour = document.getElementById('clock__hour'),
  minutes = document.getElementById('clock__minutes'),
  seconds = document.getElementById('clock__seconds')

const textHour = document.getElementById('text-hour'),
  textMinutes = document.getElementById('text-minutes'),
  textAmPm = document.getElementById('text-ampm'),
  dateDay = document.getElementById('date-day'),
  dateMonth = document.getElementById('date-month'),
  dateYear = document.getElementById('date-year')

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const clock = () => {
  let date = new Date()

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6,
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    ampm

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
  seconds.style.transform = `rotateZ(${ss}deg)`

  if (hh / 30 >= 12) {
    hh = hh / 30 - 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  }
  if (hh == 0) {
    hh = 12
  }
  if (hh < 10) {
    hh = `0${hh}`
  }
  textHour.innerText = `${hh}:`
  if (mm / 6 < 10) {
    mm = `0${mm / 6}`
  } else {
    mm = mm / 6
  }
  textMinutes.innerText = `${mm}`

  textAmPm.innerText = ampm
  dateDay.innerHTML = day
  dateMonth.innerHTML = `${months[month]}`
  dateYear.innerHTML = year
}
setInterval(clock, 1000)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
