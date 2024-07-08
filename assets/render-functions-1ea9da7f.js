import{i as u,S as f}from"./vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery");function d(i){if(i.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";else{const r=i.map(({largeImageURL:l,webformatURL:o,tags:e,likes:t,views:s,comments:c,downloads:a})=>`<li class="list">
  <a href="${l}">
    <img src='${o}' alt='${e}'/>
    <div class="item-wrap">
    <h2 class="item-text">Like<p>${t}</p></h2>
    <h2 class="item-text">Views<p>${s}</p></h2>
    <h2 class="item-text">Comments<p>${c}</p></h2>
    <h2 class="item-text">Downloads<p>${a}</p></h2>
  </div>
  </li>`).join("");n.innerHTML=r,lightbox=new f(".gallery a",{docClose:!0,close:!0}),lightbox.refresh()}}export{d as r};
//# sourceMappingURL=render-functions-1ea9da7f.js.map
