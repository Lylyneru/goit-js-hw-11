import{S as c}from"./assets/vendor-CgTBfC_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l="47392920-efce9c2b3427e3353db7767ab",u="https://pixabay.com/api/";function d(s,t=1,n=20){const r=`${u}?key=${l}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}let f=new c(".gallery a");function m(s){const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-link">
          <div class="card">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            <div class="card-info">
              <span>Likes: ${r.likes}</span>
              <span>Views: ${r.views}</span>
              <span>Comments: ${r.comments}</span>
              <span>Downloads: ${r.downloads}</span>
            </div>
          </div>
        </a>`).join("");t.insertAdjacentHTML("beforeend",n),f.refresh()}const h=document.querySelector("#search-form"),i=document.querySelector(".loader"),g=document.querySelector(".gallery");function p(){i.classList.remove("hidden")}function y(){i.classList.add("hidden")}h.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.query.value.trim();if(!t){iziToast.warning({title:"Warning",message:"Please enter a search query."});return}g.innerHTML="",p(),d(t).then(n=>{m(n)}).catch(n=>{console.error(n),iziToast.error({title:"Error",message:"Something went wrong. Please try again!"})}).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
