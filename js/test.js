  
document.addEventListener('touchmove', function(e) { 
    e.preventDefault(); 
});


var div = document.querySelector('div');
var divHeight = div.getBoundingClientRect().height;
 
VirtualScroll.on(function(e) {
    // e is an object that holds scroll values, including:
    e.deltaY; // <- amount of pixels scrolled vertically since last call
    e.deltaX; // <- amount of pixels scrolled horizontally since last call

});


var targetY = 0;
var ease = 0.1;
var scrollHeight = 1;

VirtualScroll.on(function(e) {
    targetY += e.deltaY;
    targetY = Math.max( (scrollHeight - window.innerHeight) * -1, targetY);
    targetY = Math.min(0, targetY);
    console.log(e.deltaY);
});

var currentY = 0, ease = 0.1;

var run = function() {
    requestAnimationFrame(run);
    currentY += (targetY - currentY) * ease;
    var t = 'translateY(' + currentY + 'px) translateZ(0)';
    var s = div.style;
    s["transform"] = t;
    s["webkitTransform"] = t;
    s["mozTransform"] = t;
    s["msTransform"] = t;
}

run();