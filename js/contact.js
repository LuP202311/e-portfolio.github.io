const copies = document.querySelectorAll(".objets-contact > img")
const textes = document.querySelectorAll(".objets-contact > p")

/* copier */

copies.forEach(copie => copie.addEventListener("click", (evt) => {
    textes.forEach(texte => {
        const computedFilter = window.getComputedStyle(texte).filter

        if(computedFilter.includes('blur(')) {
            copie.style.animation = 'trembler 500ms ease-out alternate';
            console.log("animation running...")
        }
        else if(computedFilter === 'none'){
            const texteCopie = copie.closest(".objets-contact").querySelector("p").innerText;
            evt.preventDefault()
            navigator.clipboard.writeText(texteCopie).then(() => {
                alert("Texte copié : " + texteCopie)
            }).catch(err => {
                console.error("Erreur lors de la copie : ", err);
            })
        }
    })
}))

/* Changement de curseur */

copies.forEach(copie => copie.addEventListener("mouseover",()=>{
    copie.style.cursor="copy"
    textes.forEach(texte => {
        texte.addEventListener("mouseout", () => {
            texte.style.cursor = "default"
        })
    })
}))

/* blur */

textes.forEach(texte => {
    texte.addEventListener('click', function () {
        texte.style.filter = 'none'
        const timer = setTimeout(() => {
            texte.style.filter = 'blur(8px)'
        }, 4000)
    })
})