let ipacces=document.getElementsByClassName("footer")[0],fetchFnc=async()=>{let e=await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_aTqX7vsni77vv0Hd4XMXimT2JBkCC",{}),t=await e.json();console.log(t),ipacces.innerHTML=`IP truy cập: ${t.ip} - ISP: ${t.isp}`};function gtag(){dataLayer.push(arguments)}fetchFnc(),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-VJ6MM9819B"),function(){function e(e){isNaN(+e)&&(e=100);var t=+new Date,n=+new Date;debugger;(isNaN(t)||isNaN(n)||n-t>e)&&document.write("Devtools detected. Please disable it.")}window.attachEvent?"complete"===document.readyState||"interactive"===document.readyState?(e(),window.attachEvent("onresize",e),window.attachEvent("onmousemove",e),window.attachEvent("onfocus",e),window.attachEvent("onblur",e)):setTimeout(argument.callee,0):(window.addEventListener("load",e),window.addEventListener("resize",e),window.addEventListener("mousemove",e),window.addEventListener("focus",e),window.addEventListener("blur",e))}();const devtools={isOpen:!1,orientation:void 0},threshold=160,emitEvent=(e,t)=>{globalThis.dispatchEvent(new globalThis.CustomEvent("devtoolschange",{detail:{isOpen:e,orientation:t}}))},main=({emitEvents:e=!0}={})=>{const t=globalThis.outerWidth-globalThis.innerWidth>160,n=globalThis.outerHeight-globalThis.innerHeight>160,i=t?"vertical":"horizontal";n&&t||!(globalThis.Firebug&&globalThis.Firebug.chrome&&globalThis.Firebug.chrome.isInitialized||t||n)?(devtools.isOpen&&e&&emitEvent(!1,void 0),devtools.isOpen=!1,devtools.orientation=void 0):(devtools.isOpen&&devtools.orientation===i||!e||emitEvent(!0,i),devtools.isOpen=!0,devtools.orientation=i)};main({emitEvents:!1}),setInterval(main,500),window.addEventListener("devtoolschange",e=>{document.write("Phát hiện hành động đáng ngờ. Reload trang để tiếp tục sử dụng.")});
window.onload=function(){function e(e){return e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0),e.preventDefault(),!1}document.addEventListener("contextmenu",function(e){e.preventDefault()},!1),document.addEventListener("keydown",function(t){t.ctrlKey&&t.shiftKey&&73==t.keyCode&&e(t),t.ctrlKey&&t.shiftKey&&74==t.keyCode&&e(t),83==t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&e(t),t.ctrlKey&&85==t.keyCode&&e(t),123==event.keyCode&&e(t)},!1)};