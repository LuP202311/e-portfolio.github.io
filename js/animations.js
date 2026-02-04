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

/* Bouton */

/* const bouton = document.querySelector(".projetPerso > button")

bouton.addEventListener("mouseover", () => {
    bouton.style.transition = "transform 0.4s ease-in-out"
    bouton.style.transform = "scale(1.05)"
    bouton.addEventListener("mouseout", () => {
        bouton.style.transition = "transform 0.4s ease-in-out"
        bouton.style.transform = "scale(1)"
    })
}) */