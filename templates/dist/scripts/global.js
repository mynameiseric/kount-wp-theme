document.addEventListener("DOMContentLoaded",function(event){var doit;function resizedWindow(){991<getBrowserWidth()&&document.querySelector("body").classList.remove("overflow-stop")}document.addEventListener("scroll",function(e){90<=window.scrollY?document.querySelector("header.k-19").classList.add("fixed-header"):document.querySelector("header.k-19").classList.remove("fixed-header")}),document.querySelector("header .hamburger").addEventListener("click",function(event){event.stopPropagation(),document.querySelector("header .hamburger").classList.toggle("active"),document.querySelector("header .nav-wrap").classList.toggle("menutoggle"),document.querySelector("header").classList.toggle("sub-menu-slide-up"),document.querySelector("header .nav-wrap .inner-nav").classList.remove("menu-active"),document.querySelector("body").classList.toggle("overflow-stop")}),function(){for(var menuOpeners=document.querySelectorAll("header .inner-nav > a, header .inner-nav > span"),j=0;j<menuOpeners.length;++j)menuOpeners[j].addEventListener("click",function(event){if(getBrowserWidth()<=991){event.stopPropagation(),event.preventDefault(),this.parentElement.classList.toggle("menu-active");for(var siblings=getSiblings(this.parentElement),j=0;j<siblings.length;++j)siblings[j].classList.contains("inner-nav")&&siblings[j].classList.remove("menu-active")}})}(),window.onresize=function(){clearTimeout(doit),doit=setTimeout(resizedWindow,100)},document.addEventListener("click",function(){getBrowserWidth()<=991&&(document.querySelector("header .hamburger").classList.remove("active"),document.querySelector("header .nav-wrap").classList.add("slide-up"),document.querySelector("header").classList.remove("sub-menu-slide-up"),document.querySelector("header .nav-wrap").classList.remove("menutoggle"),document.querySelector("header .nav-wrap .inner-nav").classList.remove("menu-active"),document.querySelector("header .hamburger").classList.remove("active"),document.querySelector("body").classList.remove("overflow-stop"))})});
//# sourceMappingURL=global.js.map