const pdf = document.querySelector('#cv > button')

pdf.addEventListener('click', () => {
    const lien = document.createElement('a')
    lien.href = "fichiers/CV_Lucie_PHUNG_ALTERNANCE_BUT.pdf"
    lien.download = "CV_Lucie_PHUNG_ALTERNANCE_BUT.pdf"
    document.body.appendChild(lien)
    lien.click()
    document.body.removeChild(lien)
})