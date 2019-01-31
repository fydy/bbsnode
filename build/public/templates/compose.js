!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,i,e,n,o){return'<div component="composer" class="composer'+(e(i&&i.resizable)?" resizable":"")+(e(i&&i.isTopicOrMain)?"":" reply")+'"'+(e(i&&i.disabled)?"":' style="visibility: inherit;"')+'>\n\n\t<div class="composer-container">\n\t\t<form id="compose-form" method="post">\n\t\t\t'+(e(i&&i.pid)?'\n\t\t\t<input type="hidden" name="pid" value="'+t.__escape(e(i&&i.pid))+'" />\n\t\t\t<input type="hidden" name="thumb" value="'+t.__escape(e(i&&i.thumb))+'" />\n\t\t\t':"")+"\n\t\t\t"+(e(i&&i.tid)?'\n\t\t\t<input type="hidden" name="tid" value="'+t.__escape(e(i&&i.tid))+'" />\n\t\t\t':"")+"\n\t\t\t"+(e(i&&i.cid)?'\n\t\t\t<input type="hidden" name="cid" value="'+t.__escape(e(i&&i.cid))+'" />\n\t\t\t':"")+'\n\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(e(i&&i.config&&i.config.csrf_token))+'" />\n\t\t</form>\n\n\t\t<div class="title-container row">\n\t\t\t'+(e(i&&i.showHandleInput)?'\n\t\t\t<div class="col-sm-3 col-md-12">\n\t\t\t\t<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="'+t.__escape(e(i&&i.handle))+'" />\n\t\t\t</div>\n\t\t\t<div class="'+(e(i&&i.isTopic)?"col-lg-9":"col-lg-12")+' col-md-12">\n\t\t\t\t'+(e(i&&i.isTopicOrMain)?'\n\t\t\t\t<input name="title" form="compose-form" class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+t.__escape(e(i&&i.topicTitle))+'"/>\n\t\t\t\t':'\n\t\t\t\t<span class="title">[[topic:composer.replying_to, "'+t.__escape(e(i&&i.topicTitle))+'"]]</span>\n\t\t\t\t')+"\n\t\t\t</div>\n\t\t\t":'\n\t\t\t<div class="'+(e(i&&i.isTopic)?"col-lg-9":"col-lg-12")+' col-md-12">\n\t\t\t\t'+(e(i&&i.isTopicOrMain)?'\n\t\t\t\t<input name="title" form="compose-form" class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+t.__escape(e(i&&i.topicTitle))+'"/>\n\t\t\t\t':'\n\t\t\t\t<span class="title">[[topic:composer.replying_to, "'+t.__escape(e(i&&i.topicTitle))+'"]]</span>\n\t\t\t\t')+"\n\t\t\t</div>\n\t\t\t")+"\n\t\t\t"+(e(i&&i.isTopic)?'\n\t\t\t<div class="category-list-container col-lg-3 col-md-12">\n\n\t\t\t</div>\n\t\t\t':"")+'\n\t\t</div>\n\n\t\t<div class="category-tag-row">\n\t\t\t<div class="btn-toolbar formatting-bar">\n\t\t\t\t<ul class="formatting-group">\n\t\t\t\t\t'+a.blocks.formatting(t,i,e,n,o)+"\n\n\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\n\t\t\t\t\t\t"+(e(i&&i.privileges&&i.privileges["upload:post:image"])?'\n\t\t\t\t\t\t<li class="img-upload-btn hide" data-format="picture" tabindex="-1">\n\t\t\t\t\t\t\t<i class="fa fa-cloud-upload"></i>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t"+(e(i&&i.privileges&&i.privileges["upload:post:file"])?'\n\t\t\t\t\t\t<li class="file-upload-btn hide" data-format="upload" tabindex="-1">\n\t\t\t\t\t\t\t<i class="fa fa-upload"></i>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\x3c!--<![endif]--\x3e\n\n\t\t\t\t\t"+(e(i&&i.allowTopicsThumbnail)?'\n\t\t\t\t\t<li tabindex="-1">\n\t\t\t\t\t\t<i class="fa fa-th-large topic-thumb-btn topic-thumb-toggle-btn hide" title="[[topic:composer.thumb_title]]"></i>\n\t\t\t\t\t</li>\n\t\t\t\t\t<div class="topic-thumb-container center-block hide">\n\t\t\t\t\t\t<form id="thumbForm" method="post" class="topic-thumb-form form-inline" enctype="multipart/form-data">\n\t\t\t\t\t\t\t<img class="topic-thumb-preview"></img>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="topic-thumb-url">[[topic:composer.thumb_url_label]]</label>\n\t\t\t\t\t\t\t\t<input type="text" id="topic-thumb-url" class="form-control" placeholder="[[topic:composer.thumb_url_placeholder]]" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="topic-thumb-file">[[topic:composer.thumb_file_label]]</label>\n\t\t\t\t\t\t\t\t<input type="file" id="topic-thumb-file" class="form-control" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group topic-thumb-ctrl">\n\t\t\t\t\t\t\t\t<i class="fa fa-spinner fa-spin hide topic-thumb-spinner" title="[[topic:composer.uploading]]"></i>\n\t\t\t\t\t\t\t\t<i class="fa fa-times topic-thumb-btn hide topic-thumb-clear-btn" title="[[topic:composer.thumb_remove]]"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t':"")+'\n\n\t\t\t\t\t<form id="fileForm" method="post" enctype="multipart/form-data">\n\t\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>\n\t\t\t\t\t\t\x3c!--<![endif]--\x3e\n\t\t\t\t\t\t\x3c!--[if lt IE 9]>\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" class="lt-ie9 hide" value="Upload"/>\n\t\t\t\t\t\t<![endif]--\x3e\n\t\t\t\t\t</form>\n\t\t\t\t</ul>\n\n\t\t\t\t<div class="btn-group pull-right action-bar">\n\t\t\t\t\t<a href="'+t.__escape(e(i&&i.discardRoute))+'" class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</a>\n\n\t\t\t\t\t<button type="submit" form="compose-form" class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row write-preview-container">\n\t\t\t<div class="col-md-6 col-sm-12 write-container">\n\t\t\t\t<div class="help-text">\n\t\t\t\t\t[[modules:composer.compose]] <span class="help hidden"><i class="fa fa-question-circle"></i></span>\n\t\t\t\t\t<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<textarea name="content" form="compose-form" class="write" tabindex="5"></textarea>\n\t\t\t</div>\n\t\t\t<div class="col-md-6 hidden-sm hidden-xs preview-container">\n\t\t\t\t<div class="help-text">\n\t\t\t\t\t<span class="toggle-preview">[[modules:composer.hide_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="preview well"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t'+(e(i&&i.isTopicOrMain)?'\n\t\t<div class="tag-row">\n\t\t\t<div class="tags-container">\n\t\t\t\t<div class="btn-group dropup '+(e(i&&i.tagWhitelist&&i.tagWhitelist.length)?"":"hidden")+'" component="composer/tag/dropdown">\n\t\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t\t\t\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>\n\t\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t\t'+a.blocks.tagWhitelist(t,i,e,n,o)+'\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<input class="tags" type="text" class="form-control" placeholder="[[tags:enter_tags_here, '+t.__escape(e(i&&i.minimumTagLength))+", "+t.__escape(e(i&&i.maximumTagLength))+']]" tabindex="5"/>\n\t\t\t</div>\n\t\t</div>\n\t\t':"")+"\n\n\n\t</div>\n</div>\n"}return a.blocks={tagWhitelist:function(n,o,a,t,i){return t(a(o&&o.tagWhitelist),function(t,i,e){return'\n\t\t\t\t\t\t<li data-tag="'+n.__escape(a(o&&o.tagWhitelist&&o.tagWhitelist[t]))+'"><a href="#">'+n.__escape(a(o&&o.tagWhitelist&&o.tagWhitelist[t]))+"</a></li>\n\t\t\t\t\t\t"})},formatting:function(n,o,a,t,i){return t(a(o&&o.formatting),function(t,i,e){return"\n\t\t\t\t\t\t"+(a(o&&o.formatting&&o.formatting[t]&&o.formatting[t].spacer)?'\n\t\t\t\t\t\t<li class="spacer"></li>\n\t\t\t\t\t\t':"\n\t\t\t\t\t\t"+(a(o&&o.formatting&&o.formatting[t]&&o.formatting[t].mobile)?"":'\n\t\t\t\t\t\t<li tabindex="-1" data-format="'+n.__escape(a(o&&o.formatting&&o.formatting[t]&&o.formatting[t].name))+'"><i class="'+n.__escape(a(o&&o.formatting&&o.formatting[t]&&o.formatting[t].className))+'"></i></li>\n\t\t\t\t\t\t')+"\n\t\t\t\t\t\t")+"\n\t\t\t\t\t"})}},a});