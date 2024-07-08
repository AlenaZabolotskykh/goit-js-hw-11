const form = document.querySelector("form")
const gallery = document.querySelector('.gallery')

form.addEventListener('submit', handlerForm)

import { renderImage } from "./js/render-functions";
import { getPicturesByQuery } from "./js/pixabay-api";


function handlerForm (evt){
    evt.preventDefault()
    gallery.innerHTML = "";
   const inputValue = form.elements.search.value;
getPicturesByQuery(inputValue)
.then(data => renderImage(data.hits))
.catch((err)=>console.log(err))
}
