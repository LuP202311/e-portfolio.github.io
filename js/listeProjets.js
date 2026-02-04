import {projets} from "./projets.js";

/**
 * Créer l'élément pour le texte
 * @param {string} elemType
 * @param {string} content
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function creerTexte(elemType, content){
    const elem = document.createElement(elemType)
    elem.textContent = content
    return elem
}

/**
 * Créer l'élément pour les étiquettes
 * @param {string} elemType
 * @param {string} etiquettes
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function creerEtiquettes(elemType, etiquettes){
    const elem = document.createElement(elemType)
    etiquettes.forEach(etiquette => {
        const li = document.createElement('li')
        li.textContent = etiquette
        li.style.listStyle = 'none'
        li.style.margin = '1%'
        li.style.color = '#3a8eba'
        li.style.backgroundColor = 'white'
        li.style.border = '1px #3a8eba solid'
        li.style.borderRadius = '30px'
        li.style.padding='0.5em'
        li.style.borderRadius = '5%'
        li.style.display = 'inline-block';

        elem.append(li)
    })
    return elem
}

/**
 * Ajouter l'objet Projet
 * @param {{image: string, titre: string, description: string}|{image: string, titre: string, description: string}} projet
 * @returns {HTMLDivElement | HTMLElement}
 */
function ajoutProjet(projet){
    const elemProj = document.createElement('div')
    const elemTitre = creerTexte('h3', projet.titre)
    const elemDescr = creerTexte('p', projet.description)
    const elemEtiq = creerEtiquettes('section', projet.etiquettes)
    elemProj.append(elemTitre, elemDescr, elemEtiq)

    elemProj.style.border = "1px solid black"
    elemProj.style.padding = "1em"
    elemProj.style.margin = "1em"
    elemProj.style.borderRadius = "1em"

    elemProj.href = projet.lien

    return elemProj


}

const sectionProjets = document.querySelector(".sectionProjets")
for(const projet of projets){
    sectionProjets.append(ajoutProjet(projet));
}


