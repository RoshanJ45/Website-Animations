    const container = document.getElementById('container');
for (let i = 0; i < 20; i++) {
container.appendChild(document.createElement('div'));
}
const logos = document.querySelectorAll('div')
for (let i = 0; i < logos.length; i++) {
logos[i].style.setProperty('--i', i)
logos[i].style.setProperty('--d', Math.random() * 8)
logos[i].style.setProperty('--a', Math.random() * 8 + 4)
logos[i].style.setProperty('--hue', Math.floor(Math.random() * 360))
logos[i].style.setProperty('--y', Math.floor(Math.random() * 100))
}
