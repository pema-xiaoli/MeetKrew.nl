var VirtualScroll=function(e){var t={},n,o=[],a=!1,l,i,r=2,d=15,s=120,u=1,c,v="onwheel"in e,h="onmousewheel"in e,w="ontouchstart"in e,m=navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,f=!!window.navigator.msPointerEnabled,g="onkeydown"in e,E=navigator.userAgent.indexOf("Firefox")>-1,X={y:0,x:0,deltaX:0,deltaY:0,originalEvent:null};t.on=function(e){a||T(),o.push(e),n=o.length},t.options=function(e){s=e.keyStep||120,d=e.firefoxMult||15,r=e.touchMult||2,u=e.mouseMult||1},t.off=function(e){o.splice(e,1),n=o.length,0>=n&&k()};var Y=function(e){X.x+=X.deltaX,X.y+=X.deltaY,X.originalEvent=e;for(var t=0;n>t;t++)o[t](X)},L=function(e){X.deltaX=e.wheelDeltaX||-1*e.deltaX,X.deltaY=e.wheelDeltaY||-1*e.deltaY,E&&1==e.deltaMode&&(X.deltaX*=d,X.deltaY*=d),X.deltaX*=u,X.deltaY*=u,Y(e)},y=function(e){X.deltaX=e.wheelDeltaX?e.wheelDeltaX:0,X.deltaY=e.wheelDeltaY?e.wheelDeltaY:e.wheelDelta,Y(e)},M=function(e){var t=e.targetTouches?e.targetTouches[0]:e;l=t.pageX,i=t.pageY},p=function(e){var t=e.targetTouches?e.targetTouches[0]:e;X.deltaX=(t.pageX-l)*r,X.deltaY=(t.pageY-i)*r,l=t.pageX,i=t.pageY,Y(e)},D=function(e){switch(X.deltaX=X.deltaY=0,e.keyCode){case 37:X.deltaX=-s;break;case 39:X.deltaX=s;break;case 38:X.deltaY=s;break;case 40:X.deltaY=-s}Y(e)},T=function(){v&&e.addEventListener("wheel",L),h&&e.addEventListener("mousewheel",y),w&&(e.addEventListener("touchstart",M),e.addEventListener("touchmove",p)),f&&m&&(c=e.body.style.msTouchAction,e.body.style.msTouchAction="none",e.addEventListener("MSPointerDown",M,!0),e.addEventListener("MSPointerMove",p,!0)),g&&e.addEventListener("keydown",D),a=!0},k=function(){v&&e.removeEventListener("wheel",L),h&&e.removeEventListener("mousewheel",y),w&&(e.removeEventListener("touchstart",M),e.removeEventListener("touchmove",p)),f&&m&&(e.body.style.msTouchAction=c,e.removeEventListener("MSPointerDown",M,!0),e.removeEventListener("MSPointerMove",p,!0)),g&&e.removeEventListener("keydown",D),a=!1};return t}(document);