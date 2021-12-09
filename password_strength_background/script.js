const pass = document.getElementById('password')
const bground = document.getElementById('background')

pass.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurVal = 20 - length * 2
  bground.style.filter = `blur(${blurVal}px)`
})
