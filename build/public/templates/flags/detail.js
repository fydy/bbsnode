!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function r(t,e,a,s,n){return'<div class="row">\n\t<div class="col-sm-4 col-md-3">\n\t\t<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:quick-filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<ul>\n\t\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+'/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<form role="form" component="flags/filters">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-state">[[flags:filter-state]]</label>\n\t\t\t\t<select class="form-control" id="filter-state" name="state">\n\t\t\t\t\t<option value="">[[flags:state-all]]</option>\n\t\t\t\t\t<option value="open">[[flags:state-open]]</option>\n\t\t\t\t\t<option value="wip">[[flags:state-wip]]</option>\n\t\t\t\t\t<option value="resolved">[[flags:state-resolved]]</option>\n\t\t\t\t\t<option value="rejected">[[flags:state-rejected]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-type">[[flags:filter-type]]</label>\n\t\t\t\t<select class="form-control" id="filter-type" name="type">\n\t\t\t\t\t<option value="">[[flags:filter-type-all]]</option>\n\t\t\t\t\t<option value="post">[[flags:filter-type-post]]</option>\n\t\t\t\t\t<option value="user">[[flags:filter-type-user]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-assignee">[[flags:filter-assignee]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-assignee" name="assignee" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-cid">[[flags:filter-cid]]</label>\n\t\t\t\t<select class="form-control" id="filter-cid" name="cid" multiple="true">\n\t\t\t\t\t<option value="">[[flags:filter-cid-all]]</option>\n\t\t\t\t\t'+r.blocks.categories(t,e,a,s,n)+'\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-targetUid">[[flags:filter-targetUid]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-targetUid" name="targetUid" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-reporterId">[[flags:filter-reporterId]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-reporterId" name="reporterId" min="0" />\n\t\t\t</div>\n\n\t\t\t<button type="button" class="btn btn-primary btn-block">[[flags:apply-filters]]</button>\n\t\t</form>\n\t</div>\n</div>\n\t</div>\n\t<div class="col-sm-8 col-md-9">\n\t\t<h2>\n\t\t\t<div class="pull-right">\n\t\t\t\t<a class="btn btn-link" href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+'/flags"><i class="fa fa-chevron-left"></i> [[flags:back]]</a>\n\t\t\t</div>\n\t\t\t'+t.__escape(a(e&&e.target_readable))+'\n\t\t\t<small><span class="timeago" title="'+t.__escape(a(e&&e.datetimeISO))+'"></span></small>\n\t\t</h2>\n\n\t\t<hr />\n\n\t\t'+(a(e&&e.type_bool&&e.type_bool.post)?'\n\t\t<div class="media">\n\t\t\t<div class="media-left">\n\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.target&&e.target.user&&e.target.user.userslug))+'">\n\t\t\t\t\t'+(a(e&&e.target&&e.target.user&&e.target.user.picture)?'\n\t\t\t\t\t<img class="media-object avatar avatar-lg" src="'+t.__escape(a(e&&e.target&&e.target.user&&e.target.user.picture))+'" alt="'+t.__escape(a(e&&e.target&&e.target.user&&e.target.user.username))+'" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="media-object avatar avatar-lg" style="background-color: '+t.__escape(a(e&&e.target&&e.target.user&&e.target.user["icon:bgColor"]))+'">'+t.__escape(a(e&&e.target&&e.target.user&&e.target.user["icon:text"]))+"</div>\n\t\t\t\t\t")+'\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="media-body">\n\t\t\t\t<h4 class="media-heading"><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.target&&e.target.user&&e.target.user.userslug))+'">'+t.__escape(a(e&&e.target&&e.target.user&&e.target.user.username))+"</a></h4>\n\t\t\t\t"+t.__escape(a(e&&e.target&&e.target.content))+"\n\t\t\t</div>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(a(e&&e.type_bool&&e.type_bool.user)?'\n\t\t<div class="media">\n\t\t\t<div class="media-left">\n\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.target&&e.target.userslug))+'">\n\t\t\t\t\t'+(a(e&&e.target&&e.target.picture)?'\n\t\t\t\t\t<img class="media-object avatar avatar-lg" src="'+t.__escape(a(e&&e.target&&e.target.picture))+'" alt="'+t.__escape(a(e&&e.target&&e.target.username))+'" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="media-object avatar avatar-lg" style="background-color: '+t.__escape(a(e&&e.target&&e.target["icon:bgColor"]))+'">'+t.__escape(a(e&&e.target&&e.target["icon:text"]))+"</div>\n\t\t\t\t\t")+'\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="media-body">\n\t\t\t\t<h4 class="media-heading"><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.target&&e.target.userslug))+'">'+t.__escape(a(e&&e.target&&e.target.username))+'</a></h4>\n\t\t\t\t<p class="lead">\n\t\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/uid/"+t.__escape(a(e&&e.target&&e.target.uid))+'">[[flags:user-view]]</a> |\n\t\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/uid/"+t.__escape(a(e&&e.target&&e.target.uid))+'/edit">[[flags:user-edit]]</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(a(e&&e.type_bool&&e.type_bool.empty)?'\n\t\t<div class="alert alert-warning">[[flags:target-purged]]</div>\n\t\t':"")+'\n\n\t\t<hr />\n\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6 col-md-8">\n\t\t\t\t<form role="form" id="attributes">\n\t\t\t\t\t<div class="form-group row">\n\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t<label>[[flags:reporter]]</label>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t'+(a(e&&e.reporter&&e.reporter.picture)?'\n\t\t\t\t\t\t\t\t<img class="media-object avatar avatar-sm" src="'+t.__escape(a(e&&e.reporter&&e.reporter.picture))+'" alt="'+t.__escape(a(e&&e.reporter&&e.reporter.username))+'" />\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="media-object avatar avatar-sm" style="background-color: '+t.__escape(a(e&&e.reporter&&e.reporter["icon:bgColor"]))+'">'+t.__escape(a(e&&e.reporter&&e.reporter["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.reporter&&e.reporter.userslug))+'">'+t.__escape(a(e&&e.reporter&&e.reporter.username))+'</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t<label>[[flags:reported-at]]</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t'+t.__escape(a(e&&e.datetimeISO))+'\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<label>[[flags:description]]</label>\n\t\t\t\t\t\t<blockquote>'+t.__escape(a(e&&e.description))+'</blockquote>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<label for="state">[[flags:state]]</label>\n\t\t\t\t\t\t<select class="form-control" id="state" name="state" disabled>\n\t\t\t\t\t\t\t<option value="open">[[flags:state-open]]</option>\n\t\t\t\t\t\t\t<option value="wip">[[flags:state-wip]]</option>\n\t\t\t\t\t\t\t<option value="resolved">[[flags:state-resolved]]</option>\n\t\t\t\t\t\t\t<option value="rejected">[[flags:state-rejected]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<label for="assignee">[[flags:assignee]]</label>\n\t\t\t\t\t\t<select class="form-control" id="assignee" name="assignee" disabled>\n\t\t\t\t\t\t\t<option value="">[[flags:no-assignee]]</option>\n\t\t\t\t\t\t\t'+r.blocks.assignees(t,e,a,s,n)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" data-action="update">[[flags:update]]</button>\n\t\t\t\t</form>\n\n\t\t\t\t<hr />\n\n\t\t\t\t<form role="form">\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<label for="note">[[flags:notes]]</label>\n\t\t\t\t\t\t<textarea id="note" class="form-control"></textarea>\n\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" data-action="appendNote">[[flags:add-note]]</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t\t<div component="flag/notes">\n\t\t\t\t\t'+(a(e&&e.notes&&e.notes.length)?"":'\n\t\t\t\t\t<div class="alert alert-success text-center">[[flags:no-notes]]</div>\n\t\t\t\t\t')+"\n\t\t\t\t\t"+r.blocks.notes(t,e,a,s,n)+'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6 col-md-4">\n\t\t\t\t<label>[[flags:quick-links]]</label>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/"+t.__escape(a(e&&e.type_path))+"/"+t.__escape(a(e&&e.targetId))+'">[[flags:go-to-target]]</a></li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t[[flags:flagged-user]]\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/uid/"+t.__escape(a(e&&e.target&&e.target.uid))+'">[[flags:view-profile]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" data-chat="'+t.__escape(a(e&&e.target&&e.target.uid))+'">[[flags:start-new-chat]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t[[flags:reporter]]\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/uid/"+t.__escape(a(e&&e.reporter&&e.reporter.uid))+'">[[flags:view-profile]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" data-chat="'+t.__escape(a(e&&e.reporter&&e.reporter.uid))+'">[[flags:start-new-chat]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<hr />\n\n\t\t\t\t<label>[[flags:history]]</label>\n\t\t\t\t<div component="flag/history">\n\t\t\t\t\t'+(a(e&&e.history&&e.history.length)?"":'\n\t\t\t\t\t<div class="alert alert-success text-center">[[flags:no-history]]</div>\n\t\t\t\t\t')+"\n\t\t\t\t\t"+r.blocks.history(t,e,a,s,n)+"\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"}return r.blocks={history:function(r,i,l,a,t){return a(l(i&&i.history),function(n,t,e){return'\n\t\t\t\t\t<div class="media">\n\t\t\t\t\t\t<div class="media-left">\n\t\t\t\t\t\t\t<a href="'+r.__escape(l(i&&i.config&&i.config.relative_path))+"/user/"+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.userslug))+'">\n\t\t\t\t\t\t\t\t'+(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.picture)?'\n\t\t\t\t\t\t\t\t<img class="media-object avatar avatar-md" src="'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.picture))+'" alt="'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.username))+'" />\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="media-object avatar avatar-md" style="background-color: '+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user["icon:bgColor"]))+'">'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<a href="'+r.__escape(l(i&&i.config&&i.config.relative_path))+"/user/"+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.userslug))+'">'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].user&&i.history[n].user.username))+'</a>\n\t\t\t\t\t\t\t\t<small><span class="timeago" title="'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].datetimeISO))+'"></span></small>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t'+(l(i&&i.history&&i.history[n]&&i.history[n].fields)?a(l(i&&i.history&&i.history[n]&&i.history[n].fields),function(t,e,a){var s=t;return'\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class="label label-primary">[[flags:'+r.__escape(s)+"]]</span>"+(l(i&&i.history&&i.history[n]&&i.history[n].fields&&i.history[n].fields[t])?' &rarr; <span class="label label-default">'+r.__escape(l(i&&i.history&&i.history[n]&&i.history[n].fields&&i.history[n].fields[t]))+"</span>":"")+"\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t"}):a(l(i&&i.fields),function(t,e,a){var s=t;return'\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class="label label-primary">[[flags:'+r.__escape(s)+"]]</span>"+(l(i&&i.fields&&i.fields[t])?' &rarr; <span class="label label-default">'+r.__escape(l(i&&i.fields&&i.fields[t]))+"</span>":"")+"\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t"}))+"\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t"})},notes:function(s,n,r,t,e){return t(r(n&&n.notes),function(t,e,a){return'\n\t\t\t\t\t<div class="media">\n\t\t\t\t\t\t<div class="media-left">\n\t\t\t\t\t\t\t<a href="'+s.__escape(r(n&&n.config&&n.config.relative_path))+"/user/"+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.userslug))+'">\n\t\t\t\t\t\t\t\t'+(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.picture)?'\n\t\t\t\t\t\t\t\t<img class="media-object avatar avatar-md" src="'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.picture))+'" alt="'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.username))+'" />\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="media-object avatar avatar-md" style="background-color: '+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user["icon:bgColor"]))+'">'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<a href="'+s.__escape(r(n&&n.config&&n.config.relative_path))+"/user/"+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.userslug))+'">'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].user&&n.notes[t].user.username))+'</a>\n\t\t\t\t\t\t\t\t<small><span class="timeago" title="'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].datetimeISO))+'"></span></small>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t'+s.__escape(r(n&&n.notes&&n.notes[t]&&n.notes[t].content))+"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t"})},assignees:function(s,n,r,t,e){return t(r(n&&n.assignees),function(t,e,a){return'\n\t\t\t\t\t\t\t<option value="'+s.__escape(r(n&&n.assignees&&n.assignees[t]&&n.assignees[t].uid))+'">'+s.__escape(r(n&&n.assignees&&n.assignees[t]&&n.assignees[t].username))+"</option>\n\t\t\t\t\t\t\t"})},categories:function(n,r,i,t,e){return t(i(r&&r.categories),function(t,e,a){var s=t;return'\n\t\t\t\t\t<option value="'+n.__escape(s)+'">'+n.__escape(i(r&&r.categories&&r.categories[t]))+"</option>\n\t\t\t\t\t"})}},r});