export function getPicturesByQuery(query) {
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
   


// function handlerForm (evt){
//     evt.preventDefault()
//     gallery.innerHTML = "";
//    const inputValue = form.elements.search.value;
// getPicturesByQuery(inputValue)
// .then(data => renderImage(data.hits))
// .catch((err)=>console.log(err))
// }

// function renderImage(images) {
//     if (images.length === 0) {
//         iziToast.show({
//             message: 'Sorry, there are no images matching your search query. Please try again!'
//           });
//         gallery.innerHTML = "";
//       }
//       else {
//     const listItems = images
//     .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `<li class="list">
//   <a href="${largeImageURL}">
//     <img src='${webformatURL}' alt='${tags}'/>
//     <div class="item-wrap">
//     <h2 class="item-text">Like<p>${likes}</p></h2>
//     <h2 class="item-text">Views<p>${views}</p></h2>
//     <h2 class="item-text">Comments<p>${comments}</p></h2>
//     <h2 class="item-text">Downloads<p>${downloads}</p></h2>
//   </div>
//   </li>`)
//     .join("");

//   gallery.innerHTML = listItems;
//   lightbox = new SimpleLightbox('.gallery a', {docClose: true,
//     close: true,
//   });
//   lightbox.refresh();
//   }}
  