import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery");let a=new p(".gallery a",{docClose:!0,close:!0});function h(s){if(s.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";else{const o=s.map(({largeImageURL:r,webformatURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="list">
  <a href="${r}">
    <img src='${i}' alt='${e}'/>
    <div class="item-wrap">
    <h2 class="item-text">Like<p>${t}</p></h2>
    <h2 class="item-text">Views<p>${n}</p></h2>
    <h2 class="item-text">Comments<p>${f}</p></h2>
    <h2 class="item-text">Downloads<p>${m}</p></h2>
  </div>
  </li>`).join("");c.innerHTML=o,a&&a.refresh()}}document.querySelector(".loader");function y(s){return fetch(`https://pixabay.com/api/?key=44791676-0ec883c6e453828f8c76360bc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const d=document.querySelector("form"),g=document.querySelector(".gallery"),l=document.querySelector(".loader");d.addEventListener("submit",L);function L(s){s.preventDefault(),g.innerHTML="";const o=d.elements.search.value.trim();if(!o){u.error({title:"Рядок не може бути пустим"});return}l.style.display="block",y(o).then(r=>{h(r.hits),l.style.display="none"}).catch(r=>console.log(r)),l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
