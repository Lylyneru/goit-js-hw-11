import{S as i}from"./assets/vendor-CgTBfC_f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function c(s){const r=`https://pixabay.com/api/?key=47392920-efce9c2b3427e3353db7767ab&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(console.log("API response:",e),e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{throw console.error("Error fetching images:",e),e})}const l=new i(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"emageTitle"});function u(s){const o=document.querySelector(".gallery");if(o.innerHTML="",s.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(r=>`
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
        </a>`).join("");o.insertAdjacentHTML("beforeend",n),l.refresh()}console.log(gallery.innerHTML);const f=document.querySelector("form"),d=document.querySelector('input[name="searchQuery"]');document.querySelector(".gallery");f.addEventListener("submit",s=>{s.preventDefault();const o=d.value.trim();if(o===""){alert("Please enter a search term!");return}c(o).then(n=>{u(n)}).catch(n=>{console.error("Error fetching images:",n)})});
//# sourceMappingURL=index.js.map
