import{S as s}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(n){const i=`https://pixabay.com/api/?key=47392920-efce9c2b3427e3353db7767ab&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{throw console.error("Error fetching images:",e),e})}new s(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"emageTitle"});const l=document.querySelector("form"),u=document.querySelector('input[name="searchQuery"]'),f=document.querySelector(".gallery");l.addEventListener("submit",n=>{n.preventDefault();const r=u.value.trim();if(r===""){alert("Please enter a search term!");return}a(r).then(o=>{renderGallery(o,f)}).catch(o=>{console.error("Error fetching images:",o)})});
//# sourceMappingURL=index.js.map
