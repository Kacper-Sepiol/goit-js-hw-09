!function(){"use strict";let t=document.querySelector(".button-start"),e=document.querySelector(".button-stop"),r=document.querySelector("body"),o=null;t.addEventListener("click",()=>{o=setInterval(()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;r.style.backgroundColor=e,t.setAttribute("disabled","")},1e3)}),e.addEventListener("click",()=>{clearInterval(o),t.removeAttribute("disabled")})}();
//# sourceMappingURL=01-color-switcher.bac5c9aa.js.map