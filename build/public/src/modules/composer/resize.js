"use strict";define("composer/resize",["taskbar"],function(t){var e={};var o=0;var i=.3;var n=.05;var a=992;var r=$("body");var u=$(window);var m=$('[component="navbar"]');var s=document.documentElement;var d=document.body;var v=m[0];function c(){return localStorage.getItem("composer:resizeRatio")||.5}function f(t){localStorage.setItem("composer:resizeRatio",Math.min(t,1))}function l(){var t=v.getBoundingClientRect();var e=Math.max(t.bottom,0);var o={top:0,left:0,right:window.innerWidth,bottom:window.innerHeight};o.width=o.right;o.height=o.bottom;o.boundedTop=e;o.boundedHeight=o.bottom-e;return o}function h(e,o){var n=l();var r=e[0];if(n.width>=a){o=Math.min(Math.max(o,i),1);var u=o*n.boundedHeight/n.height;r.style.top=((1-u)*100).toString()+"%";var m=r.getBoundingClientRect();d.style.paddingBottom=(m.bottom-m.top).toString()+"px"}else{e.removeAttr("style");d.style.paddingBottom=0}e.ratio=o;r.style.visibility="visible";t.updateActive(e.attr("data-uuid"))}var g=h;var p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;if(p){g=function(t,e){p(function(){h(t,e);setTimeout(function(){u.trigger("action:composer.resize");t.trigger("action:composer.resize")},0)})}}e.reposition=function(t){var e=c();if(e>=1-n){e=1;t.addClass("maximized")}g(t,e)};e.maximize=function(t,o){if(o){g(t,1)}else{e.reposition(t)}};e.handleResize=function(t){var e=0;var i=0;var a=0;var m=t.find(".resizer");var s=m[0];function d(t){var o=s.getBoundingClientRect();var n=(o.top+o.bottom)/2;e=(n-t.clientY)/2;i=t.clientY;u.on("mousemove",v);u.on("mouseup",c);r.on("touchmove",h)}function v(o){var i=o.clientY-e;var n=l();var a=(n.height-i)/n.boundedHeight;g(t,a)}function c(m){m.preventDefault();a=m.clientY;t.find("textarea").focus();u.off("mousemove",v);u.off("mouseup",c);r.off("touchmove",h);var s=a-e;var d=l();var p=(d.height-s)/d.boundedHeight;if(a-i===0&&t.hasClass("maximized")){t.removeClass("maximized");p=!o||o>=1-n?.5:o;g(t,p)}else if(a-i===0||p>=1-n){g(t,1);t.addClass("maximized");o=p}else{t.removeClass("maximized")}f(p)}function h(t){t.preventDefault();v(t.touches[0])}m.on("mousedown",function(t){t.preventDefault();d(t)}).on("touchstart",function(t){t.preventDefault();d(t.touches[0])}).on("touchend",c)};return e});
//# sourceMappingURL=resize.js.map