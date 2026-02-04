const options = document.querySelectorAll("#art-select > option")
const filtre = document.querySelector(".navigation > select")
const cartes = document.querySelectorAll(".carte")

filtre.addEventListener('change', filtreArt)

function filtreArt() {
    const selectedValue = filtre.value.toLowerCase(); // récup valeur sélectionnée

    options.forEach(option => {
        option.style.display = 'block'
    })

    cartes.forEach(carte => {
        const tags = carte.querySelector("li").textContent.toLowerCase();

        if (tags.includes(selectedValue)) {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }

        if(selectedValue === "default") {
            carte.style.display = 'block'
        }
    });

    if(option.value.toLowerCase() !== selectedValue && selectedValue !== "default") {
        option.style.display = 'none'
    }
}