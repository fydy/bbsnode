"use strict";define("composer/autocomplete",["composer/preview"],function(e){var t={};t.init=function(t,o){var n=t.find(".write");var r="composer-autocomplete-dropdown-"+o;var i;var a={element:n,strategies:[],options:{zIndex:2e4,dropdownClassName:r+" dropdown-menu textcomplete-dropdown"}};n.on("keyup",function(){clearTimeout(i);i=setTimeout(function(){var e=document.querySelector("."+r);var t=e.getBoundingClientRect();var o=parseFloat(e.style.marginTop,10)||0;var n=window.innerHeight+o-10-t.bottom;e.style.marginTop=Math.min(n,0)+"px"},0)});$(window).trigger("composer:autocomplete:init",a);a.element.textcomplete(a.strategies,a.options);$(".textcomplete-wrapper").css("height","100%").find("textarea").css("height","100%");a.element.on("textComplete:select",function(){e.render(t)})};return t});
//# sourceMappingURL=autocomplete.js.map