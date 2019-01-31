"use strict";define("composer/uploads",["composer/preview","composer/categoryList","translator"],function(e,t,r){var i={inProgress:{}};var a="";i.initialize=function(e){u(e);f(e);o(e);n(e);r.translate("[[modules:composer.uploading, "+0+"%]]",function(e){a=e})};function o(e){var t=$('.composer[data-uuid="'+e+'"]');t.find("#files").on("change",function(t){var r=(t.target||{}).files||($(this).val()?[{name:$(this).val(),type:utils.fileMimeType($(this).val())}]:null);if(r){c({files:r,post_uuid:e,route:"/api/post/upload"})}});t.find("#topic-thumb-file").on("change",function(t){var r=(t.target||{}).files||($(this).val()?[{name:$(this).val(),type:utils.fileMimeType($(this).val())}]:null),i;if(r){if(window.FormData){i=new FormData;for(var a=0;a<r.length;++a){i.append("files[]",r[a],r[a].name)}}d({files:r,post_uuid:e,route:"/api/topic/thumb/upload",formData:i})}})}function n(e){var t=$('.composer[data-uuid="'+e+'"]');t.on("click",".topic-thumb-clear-btn",function(e){t.find("input#topic-thumb-url").val("").trigger("change");s(t.find("input#topic-thumb-file"));$(this).addClass("hide");e.preventDefault()});t.on("paste change keypress","input#topic-thumb-url",function(){var e=$(this);setTimeout(function(){var r=e.val();if(r){t.find(".topic-thumb-clear-btn").removeClass("hide")}else{s(t.find("input#topic-thumb-file"));t.find(".topic-thumb-clear-btn").addClass("hide")}t.find("img.topic-thumb-preview").attr("src",r)},100)})}i.toggleThumbEls=function(e,t){var r=e.find(".topic-thumb-toggle-btn");e.find("input#topic-thumb-url").val(t);e.find("img.topic-thumb-preview").attr("src",t);if(t){e.find(".topic-thumb-clear-btn").removeClass("hide")}r.removeClass("hide");r.off("click").on("click",function(){var t=e.find(".topic-thumb-container");t.toggleClass("hide",!t.hasClass("hide"))})};function s(e){e.wrap("<form />").closest("form").get(0).reset();e.unwrap()}function u(e){function t(){if(a){return}n.css("top","0px");n.css("height",o.height()+"px");n.css("line-height",o.height()+"px");n.show();n.on("dragleave",function(){n.hide();n.off("dragleave")})}function r(t){t.preventDefault();var r=t.originalEvent.dataTransfer.files;var i;if(r.length){if(window.FormData){i=new FormData;for(var a=0;a<r.length;++a){i.append("files[]",r[a],r[a].name)}}c({files:r,post_uuid:e,route:"/api/post/upload",formData:i})}n.hide();return false}function i(e){e.preventDefault();return false}var a=false;var o=$('.composer[data-uuid="'+e+'"]');var n=o.find(".imagedrop");$(document).off("dragstart").on("dragstart",function(){a=true}).off("dragend").on("dragend",function(){a=false});o.on("dragenter",t);n.on("dragover",i);n.on("dragenter",i);n.on("drop",r)}function f(e){var t=$('.composer[data-uuid="'+e+'"]');t.on("paste",function(t){var r=(t.clipboardData||t.originalEvent.clipboardData||{}).items;[].some.call(r,function(t){var r=t.getAsFile();if(!r){return false}var i=utils.generateUUID()+"-"+r.name;var a=null;if(window.FormData){a=new FormData;a.append("files[]",r,i)}c({files:[r],fileNames:[i],post_uuid:e,route:"/api/post/upload",formData:a});return true})})}function l(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function p(e,t,r){return e.slice(0,t)+r+e.slice(t)}function c(o){var n=o.files;var s=o.post_uuid;var u=$('.composer[data-uuid="'+s+'"]');var f=u.find("textarea");var c=f.val();var d=u.find("#fileForm");var g=false;d.attr("action",config.relative_path+o.route);var v=t.getSelectedCid();if(!v&&ajaxify.data.cid){v=ajaxify.data.cid}for(var h=0;h<n.length;++h){var b=n[h].type.match(/image./);if(b&&!app.user.privileges["upload:post:image"]||!b&&!app.user.privileges["upload:post:file"]){return app.alertError("[[error:no-privileges]]")}}var D=[];for(var h=0;h<n.length;++h){D.push(h+"_"+Date.now()+"_"+(o.fileNames?o.fileNames[h]:n[h].name));var b=n[h].type.match(/image./);if(n[h].size>parseInt(config.maximumFileSize,10)*1024){d[0].reset();return app.alertError("[[error:file-too-big, "+config.maximumFileSize+"]]")}c=p(c,f.getCursorPosition(),(b?"!":"")+"["+D[h]+"]("+a+") ")}u.find('[data-action="post"]').prop("disabled",true);f.val(c);$(window).trigger("action:composer.uploadStart",{post_uuid:s,files:D.map(function(e,t){return{filename:e.replace(/^\d+_\d{13}_/,""),isImage:/image./.test(n[t].type)}}),text:a});d.off("submit").submit(function(){function t(e,t,r){var i;if(r){i=e.replace(/^\d+_\d{13}_/,"")}var a=f.val();var o=new RegExp(l(e)+"]\\([^)]+\\)","g");f.val(a.replace(o,(i||e)+"]("+t+")"));$(window).trigger("action:composer.uploadUpdate",{post_uuid:s,filename:e,text:t})}i.inProgress[s]=i.inProgress[s]||[];i.inProgress[s].push(1);if(o.formData){o.formData.append("cid",v)}$(this).ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},resetForm:true,clearForm:true,formData:o.formData,data:{cid:v},error:function(e){u.find('[data-action="post"]').prop("disabled",false);m(e)},uploadProgress:function(e,i,a,o){r.translate("[[modules:composer.uploading, "+o+"%]]",function(e){if(g){return}for(var r=0;r<n.length;++r){t(D[r],e)}})},success:function(r){g=true;if(r&&r.length){for(var i=0;i<r.length;++i){t(D[i],r[i].url,true)}}e.render(u);f.focus();u.find('[data-action="post"]').prop("disabled",false)},complete:function(){d[0].reset();i.inProgress[s].pop()}});return false});d.submit()}function d(e){var t=e.post_uuid,r=$('.composer[data-uuid="'+t+'"]'),a=r.find(".topic-thumb-spinner"),o=r.find("#thumbForm");o.attr("action",config.relative_path+e.route);o.off("submit").submit(function(){a.removeClass("hide");i.inProgress[t]=i.inProgress[t]||[];i.inProgress[t].push(1);$(this).ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},formData:e.formData,error:m,success:function(e){r.find("#topic-thumb-url").val((e[0]||{}).url||"").trigger("change")},complete:function(){i.inProgress[t].pop();a.addClass("hide")}});return false});o.submit()}function m(e){var t=e.responseJSON&&e.responseJSON.error||"[[error:parse-error]]";if(e&&e.status===413){t=e.statusText||"Request Entity Too Large"}app.alertError(t)}return i});
//# sourceMappingURL=uploads.js.map