import{s as l}from"./assets/vendor-0d2b10f0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function o(i){const r="https://pixabay.com/api/",t=new URLSearchParams({key:"43017102-594f5d72a54901dbdf737fff3",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${r}?${t}`;return fetch(n).then(e=>e.json())}const c=document.querySelector(".gallery");function m(i){const r=i.map(t=>`
        <div class="gallery-item">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" 
        alt="${t.tags}"/>
        <ul class="text-list">
        <li class="list-item">Likes:<span class="image-text">${t.likes}</span></li>
        <li class="list-item">Views:<span class="image-text">${t.views}</span></li>
        <li class="list-item">Comments:<span class="image-text">${t.comments}</span></li>
        <li class="list-item">Downloads:<span class="image-text">${t.downloads}</span></li>
        </ul>
        </a>
        </div>
      `).join(" ");c.innerHTML=r}form.addEventListener("submit",u);function u(i){i.preventDefault();const r=i.target.elements.formInput.value.trim();o(r).then(t=>{m(t.hits),new l(".gallery a").refresh()})}
//# sourceMappingURL=commonHelpers.js.map
