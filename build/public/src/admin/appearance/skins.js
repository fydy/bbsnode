"use strict";define("admin/appearance/skins",["translator","benchpress"],function(t,a){var e={};e.init=function(){$.ajax({method:"get",url:"https://bootswatch.com/api/3.json"}).done(e.render);$("#skins").on("click",function(t){var a=$(t.target);if(!a.attr("data-action")){a=a.parents("[data-action]")}var e=a.attr("data-action");if(e&&e==="use"){var n=a.parents("[data-theme]");var r=n.attr("data-type");var i=n.attr("data-css");var c=n.attr("data-theme");socket.emit("admin.themes.set",{type:r,id:c,src:i},function(t){if(t){return app.alertError(t.message)}s(c);app.alert({alert_id:"admin:theme",type:"info",title:"[[admin/appearance/skins:skin-updated]]",message:c?"[[admin/appearance/skins:applied-success, "+c+"]]":"[[admin/appearance/skins:revert-success]]",timeout:5e3})})}})};e.render=function(e){var n=$("#bootstrap_themes");a.parse("admin/partials/theme_list",{themes:e.themes.map(function(t){return{type:"bootswatch",id:t.name,name:t.name,description:t.description,screenshot_url:t.thumbnail,url:t.preview,css:t.cssCdn,skin:true}}),showRevert:true},function(a){t.translate(a,function(t){n.html(t);if(config["theme:src"]){var a=config["theme:src"].match(/latest\/(\S+)\/bootstrap.min.css/)[1].replace(/(^|\s)([a-z])/g,function(t,a,e){return a+e.toUpperCase()});s(a)}})})};function s(a){t.translate("[[admin/appearance/skins:select-skin]]  ||  [[admin/appearance/skins:current-skin]]",function(t){t=t.split("  ||  ");var e=t[0];var s=t[1];$("[data-theme]").removeClass("selected").find('[data-action="use"]').each(function(){if($(this).parents("[data-theme]").attr("data-theme")){$(this).html(e).removeClass("btn-success").addClass("btn-primary")}});if(!a){return}$('[data-theme="'+a+'"]').addClass("selected").find('[data-action="use"]').html(s).removeClass("btn-primary").addClass("btn-success")})}return e});
//# sourceMappingURL=skins.js.map