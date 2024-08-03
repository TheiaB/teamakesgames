// accordion.min.js
!function(){var accToggles=document.querySelectorAll('a[href^="#"]'),showall=document.getElementById("showall");function getAnchorHash(elem){return elem.href.substring(elem.href.indexOf("#")+1)}showall&&showall.addEventListener("click",(function(e){document.body.classList.add("all-visible"),document.querySelectorAll(".acc-elem").forEach((function(elem,nr){elem.classList.add("active"),elem.style.height="inherit"})),fetcher("projects"),document.querySelectorAll(".unloaded").forEach((section=>{var id=section.id;null!=id&&fetcher(id)}))})),initElem=document.querySelector(".initial"),initElem&&(initElem.style.height="initial",initElem.classList.add("active")),document.body.classList.add("js-enabled"),accToggles&&accToggles.forEach((function(elem,nr){elem.addEventListener("click",(function(e){event.preventDefault();var accElem=document.getElementById(getAnchorHash(this));if(accElem.classList.contains("unloaded")&&fetcher(accElem.id),setTimeout((function(){(function(elem){var rect=elem.getBoundingClientRect();return!(rect.y+100>window.innerHeight||rect.y<0)})(accElem)||window.scroll({top:accElem.offsetTop+accElem.scrollHeight/2-window.innerHeight/2,left:0,behavior:"smooth"})}),100),this.classList.add("active"),this.classList.contains("active")){accToggles.forEach((function(elem_else,nr_else){if(elem!=elem_else){elem_else.classList.remove("active"),document.getElementById(getAnchorHash(elem_else)).classList.remove("active");try{document.getElementById(getAnchorHash(elem_else)).style.height=0}catch{console.log(accElem.id+" doesn't exist.")}}}));try{accElem.classList.add("active"),accElem.style.height="inherit"}catch{console.log(accElem.id+" doesn't exist")}}}),{passive:!0})}))}();
// highlighter.min.js
!function(){var e=document.querySelectorAll(".highlighter");for(i=0;i<e.length;i++){var t=e[i];t.onmouseover=function(){var t=[];this.getAttribute("href").split(",").forEach(e=>{t.push(document.querySelector('#projects a[href="'+e+'"]'))}),t.forEach(e=>{e.classList.add("highlighted")}),document.querySelector("#projects .project-grid").classList.add("has-highlighted")},t.onmouseout=function(){document.querySelectorAll(".highlighted").forEach(e=>{e.classList.remove("highlighted")}),document.querySelector("#projects .project-grid").classList.remove("has-highlighted")}}}();
// toast.min.js
function toast(b){var a=document.getElementById("toast");a.innerHTML=b,a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)}
// hash.js
function share(elem){try{navigator.clipboard.writeText(window.location.href.split("#")[0]+"#"+elem.parentElement.parentElement.id),toast("copied to clipboard!")}catch(err){consone.log(err)}}async function fetcher(id){var domPosition=document.getElementById(id),file="/rsrc/ajax/section-"+id+".txt";let x=await fetch(file),y=await x.text();domPosition.innerHTML=y}!function(){if(window.location.hash){var accElem=document.querySelector(window.location.hash);if(accElem){var initElem=document.querySelector(".initial");initElem&&(initElem.style.height="0",initElem.classList.remove("active")),accElem.classList.contains("unloaded")&&fetcher(accElem.id),accElem.classList.add("active"),accElem.style.height="inherit"}}}();
// glider.js v1.7.4
// by Nick Piscitelli (pickykneee) https://nickpiscitelli.com - MIT License
!function(e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()}(function(){var a="undefined"!=typeof window?window:this,e=a.Glider=function(e,t){var i=this;if(e._glider)return e._glider;if(i.ele=e,i.ele.classList.add("glider"),(i.ele._glider=i).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,passiveListeners:!1,easing:function(e,t,i,o,s){return o*(t/=s)*t+i}},t),i.animate_id=i.page=i.slide=0,i.arrows={},i._opt=i.opt,i.opt.skipTrack)i.track=i.ele.children[0];else for(i.track=document.createElement("div"),i.ele.appendChild(i.track);1!==i.ele.children.length;)i.track.appendChild(i.ele.children[0]);i.track.classList.add("glider-track"),i.init(),i.resize=i.init.bind(i,!0),i.event(i.ele,"add",{scroll:i.updateControls.bind(i)},{passive:i.opt.passiveListeners}),i.event(a,"add",{resize:i.resize})},t=e.prototype;return t.init=function(e,t){var i,o=this,s=0,r=0,l=(o.slides=o.track.children,[].forEach.call(o.slides,function(e,t){e.classList.add("glider-slide"),e.setAttribute("data-gslide",t)}),o.containerWidth=o.ele.clientWidth,o.settingsBreakpoint());t=t||l,"auto"!==o.opt.slidesToShow&&void 0===o.opt._autoSlide||(i=o.containerWidth/o.opt.itemWidth,o.opt._autoSlide=o.opt.slidesToShow=o.opt.exactWidth?i:Math.max(1,Math.floor(i))),"auto"===o.opt.slidesToScroll&&(o.opt.slidesToScroll=Math.floor(o.opt.slidesToShow)),o.itemWidth=o.opt.exactWidth?o.opt.itemWidth:o.containerWidth/o.opt.slidesToShow,[].forEach.call(o.slides,function(e){e.style.height="auto",e.style.width=o.itemWidth+"px",s+=o.itemWidth,r=Math.max(e.offsetHeight,r)}),o.track.style.width=s+"px",o.trackWidth=s,o.isDrag=!1,o.preventClick=!1,o.move=!1,o.opt.resizeLock&&o.scrollTo(o.slide*o.itemWidth,0),(l||t)&&(o.bindArrows(),o.buildDots(),o.bindDrag()),o.updateControls(),o.emit(e?"refresh":"loaded")},t.bindDrag=function(){function e(){t.mouseDown=void 0,t.ele.classList.remove("drag"),t.isDrag&&(t.preventClick=!0),t.isDrag=!1}var t=this;t.mouse=t.mouse||t.handleMouse.bind(t);function i(){t.move=!0}var o={mouseup:e,mouseleave:e,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.mouseDown=e.clientX,t.ele.classList.add("drag"),t.move=!1,setTimeout(i,300)},touchstart:function(e){t.ele.classList.add("drag"),t.move=!1,setTimeout(i,300)},mousemove:t.mouse,click:function(e){t.preventClick&&t.move&&(e.preventDefault(),e.stopPropagation()),t.preventClick=!1,t.move=!1}};t.ele.classList.toggle("draggable",!0===t.opt.draggable),t.event(t.ele,"remove",o),t.opt.draggable&&t.event(t.ele,"add",o,{passive:t.opt.passiveListeners})},t.buildDots=function(){var e=this;if(e.opt.dots){if("string"==typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML="",e.dots.setAttribute("role","tablist"),e.dots.classList.add("glider-dots");for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var i=document.createElement("button");i.dataset.index=t,i.setAttribute("aria-label","Page "+(t+1)),i.setAttribute("role","tab"),i.className="glider-dot "+(t?"":"active"),e.event(i,"add",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(i)}}}else e.dots&&(e.dots.innerHTML="")},t.bindArrows=function(){var i=this;i.opt.arrows?["prev","next"].forEach(function(e){var t=i.opt.arrows[e];(t=t&&("string"==typeof t?document.querySelector(t):t))&&(t._func=t._func||i.scrollItem.bind(i,e),i.event(t,"remove",{click:t._func}),i.event(t,"add",{click:t._func}),i.arrows[e]=t)}):Object.keys(i.arrows).forEach(function(e){e=i.arrows[e];i.event(e,"remove",{click:e._func})})},t.updateControls=function(e){var n=this,t=(e&&!n.opt.scrollPropagate&&e.stopPropagation(),n.containerWidth>=n.trackWidth),a=(n.opt.rewind||(n.arrows.prev&&(n.arrows.prev.classList.toggle("disabled",n.ele.scrollLeft<=0||t),n.arrows.prev.setAttribute("aria-disabled",n.arrows.prev.classList.contains("disabled"))),n.arrows.next&&(n.arrows.next.classList.toggle("disabled",Math.ceil(n.ele.scrollLeft+n.containerWidth)>=Math.floor(n.trackWidth)||t),n.arrows.next.setAttribute("aria-disabled",n.arrows.next.classList.contains("disabled")))),n.slide=Math.round(n.ele.scrollLeft/n.itemWidth),n.page=Math.round(n.ele.scrollLeft/n.containerWidth),n.slide+Math.floor(Math.floor(n.opt.slidesToShow)/2)),d=Math.floor(n.opt.slidesToShow)%2?0:a+1;1===Math.floor(n.opt.slidesToShow)&&(d=0),n.ele.scrollLeft+n.containerWidth>=Math.floor(n.trackWidth)&&(n.page=n.dots?n.dots.children.length-1:0),[].forEach.call(n.slides,function(e,t){var i=e.classList,e=i.contains("visible"),o=n.ele.scrollLeft,s=n.ele.scrollLeft+n.containerWidth,r=n.itemWidth*t,l=r+n.itemWidth,r=([].forEach.call(i,function(e){/^left|right/.test(e)&&i.remove(e)}),i.toggle("active",n.slide===t),a===t||d&&d===t?i.add("center"):(i.remove("center"),i.add([t<a?"left":"right",Math.abs(t-(!(t<a)&&d||a))].join("-"))),Math.ceil(r)>=Math.floor(o)&&Math.floor(l)<=Math.ceil(s));i.toggle("visible",r),r!==e&&n.emit("slide-"+(r?"visible":"hidden"),{slide:t})}),n.dots&&[].forEach.call(n.dots.children,function(e,t){e.classList.toggle("active",n.page===t)}),e&&n.opt.scrollLock&&(clearTimeout(n.scrollLock),n.scrollLock=setTimeout(function(){clearTimeout(n.scrollLock),.02<Math.abs(n.ele.scrollLeft/n.itemWidth-n.slide)&&(n.mouseDown||n.trackWidth>n.containerWidth+n.ele.scrollLeft&&n.scrollItem(n.getCurrentSlide()))},n.opt.scrollLockDelay||250))},t.getCurrentSlide=function(){return this.round(this.ele.scrollLeft/this.itemWidth)},t.scrollItem=function(e,t,i){i&&i.preventDefault();var o,s=this,r=e,i=(++s.animate_id,s.slide),l=!0===t?(e=Math.round(e*s.containerWidth/s.itemWidth))*s.itemWidth:("string"==typeof e&&(l="prev"===e,e=s.opt.slidesToScroll%1||s.opt.slidesToShow%1?s.getCurrentSlide():s.slide,l?e-=s.opt.slidesToScroll:e+=s.opt.slidesToScroll,s.opt.rewind&&(o=s.ele.scrollLeft,e=l&&!o?s.slides.length:!l&&o+s.containerWidth>=Math.floor(s.trackWidth)?0:e)),e=Math.max(Math.min(e,s.slides.length),0),s.slide=e,s.itemWidth*e);return s.emit("scroll-item",{prevSlide:i,slide:e}),s.scrollTo(l,s.opt.duration*Math.abs(s.ele.scrollLeft-l),function(){s.updateControls(),s.emit("animated",{value:r,type:"string"==typeof r?"arrow":t?"dot":"slide"})}),!1},t.settingsBreakpoint=function(){var e=this,t=e._opt.responsive;if(t){t.sort(function(e,t){return t.breakpoint-e.breakpoint});for(var i=0;i<t.length;++i){var o=t[i];if(a.innerWidth>=o.breakpoint)return e.breakpoint!==o.breakpoint&&(e.opt=Object.assign({},e._opt,o.settings),e.breakpoint=o.breakpoint,!0)}}var s=0!==e.breakpoint;return e.opt=Object.assign({},e._opt),e.breakpoint=0,s},t.scrollTo=function(t,i,o){var s=this,r=(new Date).getTime(),l=s.animate_id,n=function(){var e=(new Date).getTime()-r;s.ele.scrollLeft=s.ele.scrollLeft+(t-s.ele.scrollLeft)*s.opt.easing(0,e,0,1,i),e<i&&l===s.animate_id?a.requestAnimationFrame(n):(s.ele.scrollLeft=t,o&&o.call(s))};a.requestAnimationFrame(n)},t.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit("remove"))},t.addItem=function(e){this.track.appendChild(e),this.refresh(!0),this.emit("add")},t.handleMouse=function(e){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},t.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},t.refresh=function(e){this.init(!0,e)},t.setOption=function(t,e){var i=this;i.breakpoint&&!e?i._opt.responsive.forEach(function(e){e.breakpoint===i.breakpoint&&(e.settings=Object.assign({},e.settings,t))}):i._opt=Object.assign({},i._opt,t),i.breakpoint=0,i.settingsBreakpoint()},t.destroy=function(){function e(t){t.removeAttribute("style"),[].forEach.call(t.classList,function(e){/^glider/.test(e)&&t.classList.remove(e)})}var t=this,i=t.ele.cloneNode(!0);t.opt.skipTrack||(i.children[0].outerHTML=i.children[0].innerHTML),e(i),[].forEach.call(i.getElementsByTagName("*"),e),t.ele.parentNode.replaceChild(i,t.ele),t.event(a,"remove",{resize:t.resize}),t.emit("destroy")},t.emit=function(e,t){e=new a.CustomEvent("glider-"+e,{bubbles:!this.opt.eventPropagate,detail:t});this.ele.dispatchEvent(e)},t.event=function(e,t,i){var o=e[t+"EventListener"].bind(e);Object.keys(i).forEach(function(e){o(e,i[e])})},e});
// glider trigger
const s = document.querySelectorAll('.slider-container>div');
s.forEach(i=>{
    new Glider(i,{slidesToShow:1,slidesToScroll:1,draggable:true,dragVelocity:1,scrollLock:true,scrollLockDelay:100,arrows:{
        prev: '#'+i.parentElement.parentElement.id+' .gl-prev',
        next: '#'+i.parentElement.parentElement.id+' .gl-next'
}})});