const form = document.querySelector("form")
const gallery = document.querySelector('.gallery')

form.addEventListener('submit', handlerForm)
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";



function getPicturesByQuery(query) {
  const KEY = '44791676-0ec883c6e453828f8c76360bc';

  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then((res) => {
    console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}



function handlerForm (evt){
    evt.preventDefault()
    gallery.innerHTML = "";
   const inputValue = form.elements.search.value;
getPicturesByQuery(inputValue)
.then(data => renderImage(data.hits))
.catch((err)=>console.log(err))
}

function renderImage(images) {
    if (images.length === 0) {
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!'
          });
        gallery.innerHTML = "";
      }
      else {
    const listItems = images
    .map(({webformatURL, tags}) => `<li class="list-group-item"><img src='${webformatURL}' alt='${tags}'/></li>`)
    .join("");

  gallery.innerHTML = listItems;
  }}
  