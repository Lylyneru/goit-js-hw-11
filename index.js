import{S as u,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){const n=`https://pixabay.com/api/?key=47392920-efce9c2b3427e3353db7767ab&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(console.log("API response:",e),e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{throw console.error("Error fetching images:",e),e})}function l(r){r.innerHTML=""}function d(r,o,s){const n=r.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-link">
          <div class="card">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            <div class="card-info">
              <span>Likes: ${e.likes}</span>
              <span>Views: ${e.views}</span>
              <span>Comments: ${e.comments}</span>
              <span>Downloads: ${e.downloads}</span>
            </div>
          </div>
        </a>`).join("");o.insertAdjacentHTML("beforeend",n),s.refresh()}const h=document.querySelector("#search-form"),a=document.querySelector(".gallery");let m=new u(".gallery a");h.addEventListener("submit",p);function p(r){r.preventDefault();const o=r.currentTarget.searchQuery.value.trim();if(!o){c.warning({title:"Warning",message:"Please enter a search query!"});return}g(),f(o).then(s=>{l(a),d(s,a,m),c.success({title:"Success",message:"Images loaded successfully!"})}).catch(s=>{l(a),c.error({title:"Error",message:s.message||"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{y()})}function g(){a.innerHTML='<div class="loader"></div>'}function y(){var r;(r=document.querySelector(".loader"))==null||r.remove()}
//# sourceMappingURL=index.js.map
