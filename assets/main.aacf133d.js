function k(){import("data:text/javascript,")}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const p=document.querySelectorAll(".card__checkbox");function v(n){let e=n.target;for(let i of this.children)i.children[0].removeAttribute("checked"),i.classList.remove("border");for(;e!=this;)e.matches(".card__checkbox-wrapper")&&(e.children[0].setAttribute("checked",""),e.classList.add("border")),e=e.parentNode}for(let n of p)n.addEventListener("pointerdown",v);const a=document.querySelectorAll(".card"),s=document.querySelector("#button_next"),L=document.querySelector(".header__arrow-left"),y=document.querySelector(".header__arrow-right"),w=document.querySelector(".current-number"),u=document.querySelector(".header__scrollbal");class b{constructor(){this.prev=null,this.current=1,this.slideLength=a.length}handleEvent(e){if(e.currentTarget.matches("#button_next"))return this.nextSlide();if(e.currentTarget.matches(".header__arrow-left"))return this.prevSlide();if(e.currentTarget.matches(".header__arrow-right"))return this.nextSlide()}nextSlide(){this.current!==this.slideLength&&(this.prev=this.current,this.current++,this.showSlide())}prevSlide(){this.current!==1&&(this.prev=this.current,this.current--,this.showSlide())}showSlide(){a[this.current-1].classList.add("show"),this.prev&&a[this.prev-1].classList.remove("show"),this.setTextButton(),this.scrollBar()}setTextButton(){if(this.current===1){s.innerHTML="\u041D\u0430\u0447\u0430\u0442\u044C";return}this.current>1&&(s.innerHTML="\u0414\u0430\u043B\u0435\u0435"),this.current===this.slideLength&&(s.innerHTML="\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C")}scrollBar(){w.innerHTML=`${this.current}`;let e=Math.round(u.offsetWidth/this.slideLength);u.children[0].style.width=`${e}px`,u.children[0].style.marginLeft=`${e*(this.current-1)}px`}}let c=new b;c.showSlide();s.addEventListener("pointerdown",c);L.addEventListener("pointerdown",c);y.addEventListener("pointerdown",c);let o=180,f;function S(){o=o-1;let n=Math.floor(o/60),e=o-n*60;n==0&&e==0&&clearInterval(f),e=e>=10?e:"0"+e;let i=document.getElementById("min");i.innerHTML=n;let l=document.getElementById("sec");l.innerHTML=e}function _(){f=setInterval(S,1e3)}_();var m=document.createElement("style"),g=$(".range input"),h=["webkit-slider-runnable-track","moz-range-track","ms-track"];document.body.appendChild(m);var x=function(n){var e=n.value,i=(e-1)*32.666666667,l="";$(".range-labels li").removeClass("active selected");var t=$(".range-labels").find("li:nth-child("+e+")");t.addClass("active selected"),t.prevAll().addClass("selected");for(var r=0;r<h.length;r++)l+=".range {background: linear-gradient(to right, #C70122 0%, #C70122 "+i+"%, #fff "+i+"%, #fff 100%)}",l+=".range input::-"+h[r]+"{background: linear-gradient(to right, #C70122 0%, #C70122 "+i+"%, #f3f3f3 "+i+"%, #f3f3f3 100%)}";return l};g.on("input",function(){m.textContent=x(this)});$(".range-labels li").on("click",function(){var n=$(this).index();g.val(n+1).trigger("input")});export{k as __vite_legacy_guard};
