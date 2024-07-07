import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as m,S as u}from"./assets/vendor-8c59ed88.js";const s=document.querySelector("form"),r=document.querySelector(".gallery");s.addEventListener("submit",g);function p(t){return fetch(`https://pixabay.com/api/?key=44791676-0ec883c6e453828f8c76360bc&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})}function g(t){t.preventDefault(),r.innerHTML="";const o=s.elements.search.value;p(o).then(e=>f(e.hits)).catch(e=>console.log(e))}function f(t){if(t.length===0)m.show({message:"Sorry, there are no images matching your search query. Please try again!"}),r.innerHTML="";else{const o=t.map(({largeImageURL:e,webformatURL:i,tags:n,likes:a,views:l,comments:c,downloads:h})=>`<li class="list">
  <a href="${e}">
    <img src='${i}' alt='${n}'/>
    <div class="item-wrap">
    <h2 class="item-text">Like<p>${a}</p></h2>
    <h2 class="item-text">Views<p>${l}</p></h2>
    <h2 class="item-text">Comments<p>${c}</p></h2>
    <h2 class="item-text">Downloads<p>${h}</p></h2>
  </div>
  </li>`).join("");r.innerHTML=o,lightbox=new u(".gallery a",{docClose:!0,close:!0}),lightbox.refresh()}}
//# sourceMappingURL=commonHelpers2.js.map
