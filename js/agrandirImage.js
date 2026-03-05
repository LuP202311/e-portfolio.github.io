const images = document.querySelectorAll(".img-certif")
const imagesgr = document.querySelectorAll(".img-certif-gr")
const buttons = document.querySelectorAll(".fermer-btn")
const bgrPage = document.querySelector("body")

imagesgr.forEach(imagesgr => imagesgr.style.display = "none")
buttons.forEach(button => button.style.display = "none")
images.forEach(image => image.addEventListener("click", () => {
    imagesgr.forEach(imagegr => imagegr.style.display = "block")
    buttons.forEach(button => button.style.display = "block")
}))

buttons.forEach(button => button.addEventListener("click", () => {
    imagesgr.forEach(imagesgr => imagesgr.style.display = "none")
    button.style.display = "none"
}))