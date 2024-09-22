import{i as a,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="46122064-27fc1540b81cd289c7b100078",f="https://pixabay.com/api/",p=s=>fetch(`${f}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>r.hits);function h(s){const r=document.querySelector(".galllery");r.innerHTML="",s.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const i=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:c,views:l,comments:n,downloads:u})=>`<li class="gallery-item"> 
        <a href="${e}" class="gallery-link">
  <img src="${o}" alt="${t}" class="card-img"/>
  <ul class="desc-list">
    <li class="desc-item">
      <p class="desc-value">Likes</p>
      <p class="desc-quantity">${c}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Views</p>
      <p class="desc-quantity">${l}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Comments</p>
      <p class="desc-quantity">${n}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Downloads</p>
      <p class="desc-quantity">${u}</p>
    </li>
  </ul>
 </li>`).join("");r.innerHTML=i}const y=new d(".gallery a"),g=document.querySelector(".search-form");g.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.target.elements.query.value.trim();r&&p(r).then(i=>{h(i),y.refresh()}).catch(i=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})})}
//# sourceMappingURL=index.js.map
