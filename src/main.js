
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderImage } from "./js/render-functions";
import { getPicturesByQuery } from "./js/pixabay-api";

const form = document.querySelector("form")
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')
form.addEventListener('submit', handlerForm)

function handlerForm (evt){
  evt.preventDefault()
  gallery.innerHTML = "";
 const inputValue = form.elements.search.value.trim();
 if (!inputValue) {
  iziToast.error({
    title: 'Рядок не може бути пустим',
  });
  return;}
  loader.style.display = 'block';
getPicturesByQuery(inputValue)
.then(data => {renderImage(data.hits)
})
.catch((err)=>console.log(err))
.finally(() => {
loader.style.display = 'none'
})
}
