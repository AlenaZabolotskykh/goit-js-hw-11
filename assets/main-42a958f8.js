import{r}from"./render-functions-1ea9da7f.js";function c(t){return fetch(`https://pixabay.com/api/?key=44791676-0ec883c6e453828f8c76360bc&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})}const n=document.querySelector("form"),a=document.querySelector(".gallery");n.addEventListener("submit",s);function s(t){t.preventDefault(),a.innerHTML="";const o=n.elements.search.value;c(o).then(e=>r(e.hits)).catch(e=>console.log(e))}
//# sourceMappingURL=main-42a958f8.js.map
