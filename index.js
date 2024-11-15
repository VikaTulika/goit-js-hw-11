import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(s){return s.map(({webformatURL:o,largeImageURL:n,tags:r,likes:e,views:t,comments:i,downloads:f})=>`
    <li class="item">
        <a href="${n}">
          <img src="${o}" alt="${r}"/>
          <div>
            <p>Likes ${e}</p>
            <p>Views ${t}</p>
            <p>Comments ${i}</p>
            <p>Downloads ${f}</p>
          </div>
        </a>
      </li>`).join("")}function h(s){return fetch(`https://pixabay.com/api/?key=47091591-3a0c1be132fb67c8f1fe23cd9&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const a=document.querySelector(".search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=new d(".gallery a");a.addEventListener("submit",g);function g(s){s.preventDefault();const o=a.elements.query.value.trim();if(o===""){c.warning({message:"enter something for search"});return}l.innerHTML="",u.classList.remove("hidden"),h(o).then(n=>{if(n.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=m(n.hits);l.insertAdjacentHTML("beforeend",r),p.refresh()}).catch(n=>{console.log(n),c.error({message:"Oops, something went wrong!"})}).finally(()=>{u.classList.add("hidden"),a.reset()})}
//# sourceMappingURL=index.js.map
