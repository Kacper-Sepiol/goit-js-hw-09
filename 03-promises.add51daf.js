!function(){"use strict";let e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]');document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();let i=parseInt(e.value),u=parseInt(t.value),l=parseInt(n.value);!function(e,t,n){let o=e;for(let e=1;e<=n;e++)(function(e,t){return new Promise((n,o)=>{setTimeout(()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(e,o).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}),o+=t}(i,u,l)})}();
//# sourceMappingURL=03-promises.add51daf.js.map