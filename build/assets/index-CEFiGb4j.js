(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();{const _="https://shrub-adaptable-twig.glitch.me/";let i=[],s=[];const n=localStorage.getItem("favourite")?JSON.parse(localStorage.getItem("favourite")):[],t=new Audio,r=document.getElementsByClassName("track"),l=document.querySelector(".player"),h=document.querySelector(".player__action_pause"),b=document.querySelector(".player__action_stop"),q=document.querySelector(".player__action_prev"),k=document.querySelector(".player__action_next"),g=document.querySelector(".player__action_mute"),d=document.querySelector(".player__action_favourite"),p=document.querySelector(".player__range"),M=document.querySelector(".player__time-passed"),w=document.querySelector(".player__time-total"),v=document.querySelector(".player__volume-range"),O=document.querySelector(".track-info__title"),B=document.querySelector(".track-info__artist"),P=document.querySelector(".header__logo"),T=document.querySelector(".header__search"),I=document.querySelector(".header__favourite"),m=document.querySelector(".catalog__list"),A=(e,a)=>{let c=null;return function(...o){c||(c=setTimeout(()=>{e(...o),clearTimeout(c),c=null},a))}},x=()=>{const e=document.querySelector(".track_active");t.paused?(t.play(),h.classList.remove("player__action_play"),e.classList.remove("track_pause")):(t.pause(),h.classList.add("player__action_play"),e.classList.add("track_pause"))},S=e=>{e.preventDefault();const a=e.currentTarget;if(a.classList.contains("track_active")){x();return}const c=a.dataset.track;n.indexOf(c)!==-1?d.classList.add("player__action_favourite_active"):d.classList.remove("player__action_favourite_active");let o=0;const f=s.find((u,D)=>(o=D,c===u.id));t.src=`${_}${f.mp3}`,t.play(),B.textContent=f.artist,O.textContent=f.track,h.classList.remove("player__action_play"),l.classList.add("player_active"),l.dataset.track=c;const y=o===0?s.length-1:o-1,j=o+1===s.length?0:o+1;q.dataset.track=s[y].id,k.dataset.track=s[j].id,d.dataset.track=c;for(let u=0;u<r.length;u++)c===r[u].dataset.track?r[u].classList.add("track_active"):r[u].classList.remove("track_active")},N=()=>{for(let e=0;e<r.length;e++)r[e].addEventListener("click",S)},H=e=>{const a=document.createElement("li");return a.classList.add("catalog__item"),a.innerHTML=`
        <a class="catalog__track track" href="#" data-track="${e.id}">
          <div class="track__img-inner">
            <img class="track__poster" src="${_}${e.poster}" alt="${e.artist} ${e.track}" />
          </div>
          <div class="track__info track-info">
            <p class="track-info__title">${e.track}</p>
            <p class="track-info__artist">${e.artist}</p>
          </div>
        </a>
    `,l.dataset.track===e.id&&(a.firstElementChild.classList.add("track_active"),t.paused&&a.firstElementChild.classList.add("track_pause")),a},L=e=>{if(s=[...e],s.length===0){m.textContent="Ничего не найдено";return}m.textContent="";const a=e.map(H);m.append(...a),N(),$()},F=()=>{const e=document.createElement("li");return e.classList.add("catalog__item_showmore"),e.innerHTML=`
   <button class="catalog__showmore-button" type="button">Увидеть всё</button>
  `,e.addEventListener("click",()=>{[...r].forEach(a=>{a.parentElement.style.display="",e.remove()})}),e},$=(e=1)=>{m.children.length!==0&&(m.clientHeight>r[0].clientHeight*3-50?(r[r.length-e].parentElement.style.display="none",$(e+1)):e!==1&&m.append(F()))},R=()=>{const e=t.duration,a=t.currentTime,c=a/e*p.max;p.value=c||0;const E=Math.floor(a/60)||"0",o=Math.floor(a%60)||"0",f=Math.floor(e/60)||"0",y=Math.floor(e%60)||"0";M.textContent=`${E}:${o<10?"0"+o:o}`,w.textContent=`${f}:${y<10?"0"+y:y}`},C=()=>{q.addEventListener("click",S),k.addEventListener("click",S),h.addEventListener("click",x);const e=A(R,700);t.addEventListener("timeupdate",e),t.addEventListener("ended",()=>{k.dispatchEvent(new Event("click",{bubbles:!0}))}),p.addEventListener("change",()=>{const a=p.value;t.currentTime=a/p.max*t.duration}),I.addEventListener("click",()=>{const a=i.filter(c=>n.includes(c.id));L(a)}),d.addEventListener("click",()=>{const a=n.indexOf(d.dataset.track);a===-1?(n.push(d.dataset.track),d.classList.add("player__action_favourite_active")):(n.splice(a,1),d.classList.remove("player__action_favourite_active")),localStorage.setItem("favourite",JSON.stringify(n))}),b.addEventListener("click",()=>{t.src="",l.classList.remove("player_active"),document.querySelector(".track_active")&&document.querySelector(".track_active").classList.remove("track_active")}),P.addEventListener("click",()=>{L(i)}),v.addEventListener("input",()=>{g.classList.remove("player__action_unmute");const a=v.value;t.volume=a/100}),g.addEventListener("click",()=>{t.volume?(localStorage.setItem("volume",t.volume),t.volume=0,g.classList.add("player__action_unmute"),v.value=0):(t.volume=localStorage.getItem("volume"),g.classList.remove("player__action_unmute"),v.value=t.volume*100)}),T.addEventListener("submit",async a=>{a.preventDefault(),s=await fetch(`${_}api/music?search=${T.search.value}`).then(c=>c.json()),L(s),C()})};(async()=>{t.volume=localStorage.getItem("volume")||1,v.value=t.volume*100,i=await fetch(`${_}api/music`).then(e=>e.json()),L(i),C()})()}
