!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,i,n,e,a){return'<div component="composer" class="composer'+(n(i&&i.resizable)?" resizable":"")+(n(i&&i.isTopicOrMain)?"":" reply")+'">\n\n\t<div class="composer-container">\n\t\t<nav class="navbar navbar-fixed-top mobile-navbar hidden-md hidden-lg">\n\t\t\t<div class="btn-group">\n\t\t\t\t<button class="btn btn-sm btn-primary composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i></button>\n\t\t\t\t<button class="btn btn-sm btn-primary composer-minimize" data-action="minimize" tabindex="-1"><i class="fa fa-minus"></i></button>\n\t\t\t</div>\n\t\t\t'+(n(i&&i.isTopic)?'\n\t\t\t<div class="category-name-container">\n\t\t\t\t<span class="category-name"></span> <i class="fa fa-sort"></i>\n\t\t\t</div>\n\t\t\t':"")+"\n\t\t\t"+(n(i&&i.isTopicOrMain)?"":'\n\t\t\t<h4 class="title">[[topic:composer.replying_to, "'+t.__escape(n(i&&i.title))+'"]]</h4>\n\t\t\t')+'\n\t\t\t<div class="btn-group">\n\t\t\t\t<button class="btn btn-sm btn-primary composer-submit" data-action="post" tabindex="-1"><i class="fa fa-chevron-right"></i></button>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class="row title-container">\n\t\t\t'+(n(i&&i.showHandleInput)?'\n\t\t\t<div class="col-sm-3 col-md-12">\n\t\t\t\t<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="'+t.__escape(n(i&&i.handle))+'" />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t'+(n(i&&i.isTopicOrMain)?'\n\t\t\t\t<input class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+t.__escape(n(i&&i.title))+'"/>\n\t\t\t\t':'\n\t\t\t\t<span class="title form-control">[[topic:composer.replying_to, "'+t.__escape(n(i&&i.title))+'"]]</span>\n\t\t\t\t')+"\n\t\t\t</div>\n\t\t\t":"\n\t\t\t<div>\n\t\t\t\t"+(n(i&&i.isTopicOrMain)?'\n\t\t\t\t<input class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+t.__escape(n(i&&i.title))+'"/>\n\t\t\t\t':'\n\t\t\t\t<span class="title form-control">[[topic:composer.replying_to, "'+t.__escape(n(i&&i.title))+'"]]</span>\n\t\t\t\t')+"\n\t\t\t</div>\n\t\t\t")+"\n\t\t\t"+(n(i&&i.isTopic)?'\n\t\t\t<div class="category-list-container hidden-sm hidden-xs"></div>\n\t\t\t':"")+'\n\n\t\t\t<div class="btn-group pull-right action-bar hidden-sm hidden-xs">\n\t\t\t\t<button class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</button>\n\n\t\t\t\t<button class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="category-tag-row">\n\t\t\t<div class="btn-toolbar formatting-bar">\n\t\t\t\t<ul class="formatting-group">\n\t\t\t\t\t'+s.blocks.formatting(t,i,n,e,a)+"\n\n\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\n\t\t\t\t\t\t"+(n(i&&i.privileges&&i.privileges["upload:post:image"])?'\n\t\t\t\t\t\t<li class="img-upload-btn hide" data-format="picture" tabindex="-1" title="[[modules:composer.upload-picture]]">\n\t\t\t\t\t\t\t<i class="fa fa-cloud-upload"></i>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t"+(n(i&&i.privileges&&i.privileges["upload:post:file"])?'\n\t\t\t\t\t\t<li class="file-upload-btn hide" data-format="upload" tabindex="-1" title="[[modules:composer.upload-file]]">\n\t\t\t\t\t\t\t<i class="fa fa-upload"></i>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\x3c!--<![endif]--\x3e\n\n\t\t\t\t\t"+(n(i&&i.allowTopicsThumbnail)?'\n\t\t\t\t\t<li tabindex="-1">\n\t\t\t\t\t\t<i class="fa fa-th-large topic-thumb-btn topic-thumb-toggle-btn hide" title="[[topic:composer.thumb_title]]"></i>\n\t\t\t\t\t</li>\n\t\t\t\t\t<div class="topic-thumb-container center-block hide">\n\t\t\t\t\t\t<form id="thumbForm" method="post" class="topic-thumb-form form-inline" enctype="multipart/form-data">\n\t\t\t\t\t\t\t<img class="topic-thumb-preview"></img>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="topic-thumb-url">[[topic:composer.thumb_url_label]]</label>\n\t\t\t\t\t\t\t\t<input type="text" id="topic-thumb-url" class="form-control" placeholder="[[topic:composer.thumb_url_placeholder]]" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="topic-thumb-file">[[topic:composer.thumb_file_label]]</label>\n\t\t\t\t\t\t\t\t<input type="file" id="topic-thumb-file" class="form-control" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group topic-thumb-ctrl">\n\t\t\t\t\t\t\t\t<i class="fa fa-spinner fa-spin hide topic-thumb-spinner" title="[[topic:composer.uploading]]"></i>\n\t\t\t\t\t\t\t\t<i class="fa fa-times topic-thumb-btn hide topic-thumb-clear-btn" title="[[topic:composer.thumb_remove]]"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t':"")+'\n\n\t\t\t\t\t<form id="fileForm" method="post" enctype="multipart/form-data">\n\t\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>\n\t\t\t\t\t\t\x3c!--<![endif]--\x3e\n\t\t\t\t\t\t\x3c!--[if lt IE 9]>\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" class="lt-ie9 hide" value="Upload"/>\n\t\t\t\t\t\t<![endif]--\x3e\n\t\t\t\t\t</form>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row write-preview-container">\n\t\t\t<div class="write-container">\n\t\t\t\t<div class="help-text">\n\t\t\t\t\t<span class="help hidden">[[modules:composer.compose]] <i class="fa fa-question-circle"></i></span>\n\t\t\t\t\t<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<textarea class="write" tabindex="4"></textarea>\n\t\t\t</div>\n\t\t\t<div class="hidden-sm hidden-xs preview-container">\n\t\t\t\t<div class="help-text">\n\t\t\t\t\t<span class="toggle-preview">[[modules:composer.hide_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="preview well"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t'+(n(i&&i.isTopicOrMain)?'\n\t\t<div class="tag-row">\n\t\t\t<div class="tags-container">\n\t\t\t\t<div class="btn-group dropup '+(n(i&&i.tagWhitelist&&i.tagWhitelist.length)?"":"hidden")+'" component="composer/tag/dropdown">\n\t\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t\t\t\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>\n\t\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t\t'+s.blocks.tagWhitelist(t,i,n,e,a)+'\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<input class="tags" type="text" class="form-control" placeholder="[[tags:enter_tags_here, '+t.__escape(n(i&&i.minimumTagLength))+", "+t.__escape(n(i&&i.maximumTagLength))+']]" tabindex="5"/>\n\t\t\t</div>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(n(i&&i.isTopic)?'\n\t\t<ul class="category-selector visible-xs visible-sm">\n\n\t\t</ul>\n\t\t':"")+'\n\n\t\t<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\n\t\t<div class="resizer"><div class="trigger text-center"><i class="fa"></i></div></div>\n\t</div>\n</div>\n'}return s.blocks={tagWhitelist:function(e,a,s,t,i){return t(s(a&&a.tagWhitelist),function(t,i,n){return'\n\t\t\t\t\t\t<li data-tag="'+e.__escape(s(a&&a.tagWhitelist&&a.tagWhitelist[t]))+'"><a href="#">'+e.__escape(s(a&&a.tagWhitelist&&a.tagWhitelist[t]))+"</a></li>\n\t\t\t\t\t\t"})},formatting:function(e,a,s,t,i){return t(s(a&&a.formatting),function(t,i,n){return"\n\t\t\t\t\t\t"+(s(a&&a.formatting&&a.formatting[t]&&a.formatting[t].spacer)?'\n\t\t\t\t\t\t<li class="spacer"></li>\n\t\t\t\t\t\t':"\n\t\t\t\t\t\t"+(s(a&&a.formatting&&a.formatting[t]&&a.formatting[t].mobile)?"":'\n\t\t\t\t\t\t<li tabindex="-1" data-format="'+e.__escape(s(a&&a.formatting&&a.formatting[t]&&a.formatting[t].name))+'" title="'+e.__escape(s(a&&a.formatting&&a.formatting[t]&&a.formatting[t].title))+'"><i class="'+e.__escape(s(a&&a.formatting&&a.formatting[t]&&a.formatting[t].className))+'"></i></li>\n\t\t\t\t\t\t')+"\n\t\t\t\t\t\t")+"\n\t\t\t\t\t"})}},s});