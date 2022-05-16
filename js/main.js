let head = document.querySelector(".head")
let ul = document.querySelector("ul")
let myBtn = document.querySelector(".btn")

window.onload = function () {
    if (window.navigator.onLine) {
        online()
    } else {
        offline()
    }
}
window.addEventListener("online", function () {
    online()
})
window.addEventListener("offline", function () {
    offline()
})
myBtn.onclick = function () {
    window.location.reload()
}

function online() {
    head.innerHTML = 'Online Now';
    head.style.color = 'green';
    ul.classList.add('hide')
    myBtn.classList.add('hide')
}
function offline() {
    head.innerHTML = 'Offline Now';
    head.style.color = '#666';
    ul.classList.remove('hide')
    myBtn.classList.remove('hide')
}