/* Cartes */

const cartes = document.querySelectorAll(".card")

cartes.forEach(carte => carte.addEventListener("mouseover", () => {
        carte.style.transition = "transform 0.4s ease-in-out"
        carte.style.transform = "scale(1.05)"
        carte.addEventListener("mouseout", () => {
            carte.style.transition = "transform 0.4s ease-in-out"
            carte.style.transform = "scale(1)"
        })
    })
)