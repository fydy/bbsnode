!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,a,n,e,s){return'<div class="row manage-users">\n\t<div class="col-lg-12">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-user"></i> [[admin/manage/users:users]]</div>\n\t\t\t<div class="panel-body">\n\n\t\t\t\t<div class="clearfix">\n\t\t\t\t\t<div class="btn-group pull-right">\n\t\t\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">[[admin/manage/users:edit]] <span class="caret"></span></button>\n\t\t\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t\t\t<li><a href="#" class="validate-email"><i class="fa fa-fw fa-check"></i> [[admin/manage/users:validate-email]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="send-validation-email"><i class="fa fa-fw fa-mail-forward"></i> [[admin/manage/users:send-validation-email]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="password-reset-email"><i class="fa fa-fw fa-key"></i> [[admin/manage/users:password-reset-email]]</a></li>\n\t\t\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t\t\t<li><a href="#" class="ban-user"><i class="fa fa-fw fa-gavel"></i> [[admin/manage/users:ban]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="ban-user-temporary"><i class="fa fa-fw fa-clock-o"></i>[[admin/manage/users:temp-ban]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="unban-user"><i class="fa fa-fw fa-comment-o"></i> [[admin/manage/users:unban]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="reset-lockout"><i class="fa fa-fw fa-unlock"></i> [[admin/manage/users:reset-lockout]]</a></li>\n\t\t\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t\t\t<li><a href="#" class="delete-user"><i class="fa fa-fw fa-trash-o"></i> [[admin/manage/users:delete]]</a></li>\n\t\t\t\t\t\t\t<li><a href="#" class="delete-user-and-content"><i class="fa fa-fw fa-trash-o"></i> [[admin/manage/users:purge]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<a target="_blank" href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/api/admin/users/csv" class="btn btn-primary pull-right">[[admin/manage/users:download-csv]]</a>\n\n\t\t\t\t\t'+(n(a&&a.inviteOnly)?'\n\t\t\t\t\t<button component="user/invite" class="btn btn-success pull-right"><i class="fa fa-users"></i> [[admin/manage/users:invite]]</button>\n\t\t\t\t\t':"")+'\n\n\t\t\t\t\t<button id="createUser" class="btn btn-primary pull-right">[[admin/manage/users:new]]</button>\n\t\t\t\t</div>\n\n\t\t\t\t<ul class="nav nav-pills">\n\t\t\t\t\t<li><a href=\''+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/latest'>[[admin/manage/users:pills.latest]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/not-validated'>[[admin/manage/users:pills.unvalidated]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/no-posts'>[[admin/manage/users:pills.no-posts]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/top-posters'>[[admin/manage/users:pills.top-posters]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/most-reputation'>[[admin/manage/users:pills.top-rep]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/inactive'>[[admin/manage/users:pills.inactive]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/flagged'>[[admin/manage/users:pills.flagged]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/banned'>[[admin/manage/users:pills.banned]]</a></li>\n\t\t\t\t\t<li><a href='"+t.__escape(n(a&&a.config&&a.config.relative_path))+"/admin/manage/users/search'>[[admin/manage/users:pills.search]]</a></li>\n\t\t\t\t</ul>\n\n\t\t\t\t<br />\n\n\t\t\t\t<div class=\"search "+t.__escape(n(a&&a.search_display))+'">\n\t\t\t\t\t<label>[[admin/manage/users:search.uid]]</label>\n\t\t\t\t\t<input class="form-control" id="search-user-uid" data-search-type="uid" type="number" placeholder="[[admin/manage/users:search.uid-placeholder]]"/><br />\n\n\t\t\t\t\t<label>[[admin/manage/users:search.username]]</label>\n\t\t\t\t\t<input class="form-control" id="search-user-name" data-search-type="username" type="text" placeholder="[[admin/manage/users:search.username-placeholder]]"/><br />\n\n\t\t\t\t\t<label>[[admin/manage/users:search.email]]</label>\n\t\t\t\t\t<input class="form-control" id="search-user-email" data-search-type="email" type="text" placeholder="[[admin/manage/users:search.email-placeholder]]"/><br />\n\n\t\t\t\t\t<label>[[admin/manage/users:search.ip]]</label>\n\t\t\t\t\t<input class="form-control" id="search-user-ip" data-search-type="ip" type="text" placeholder="[[admin/manage/users:search.ip-placeholder]]"/><br />\n\n\t\t\t\t\t<i class="fa fa-spinner fa-spin hidden"></i>\n\t\t\t\t\t<span id="user-notfound-notify" class="label label-danger hide">[[admin/manage/users:search.not-found]]</span><br/>\n\t\t\t\t</div>\n\n\t\t\t\t'+(n(a&&a.inactive)?'\n\t\t\t\t<a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/admin/manage/users/inactive?months=3" class="btn btn-default">[[admin/manage/users:inactive.3-months]]</a>\n\t\t\t\t<a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/admin/manage/users/inactive?months=6" class="btn btn-default">[[admin/manage/users:inactive.6-months]]</a>\n\t\t\t\t<a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/admin/manage/users/inactive?months=12" class="btn btn-default">[[admin/manage/users:inactive.12-months]]</a>\n\t\t\t\t':"")+'\n\n\t\t\t\t<div class="table-responsive">\n\t\t\t\t\t<table class="table table-striped users-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><input component="user/select/all" type="checkbox"/></th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.uid]]</th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.username]]</th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.email]]</th>\n\t\t\t\t\t\t\t\t<th class="text-right">[[admin/manage/users:users.postcount]]</th>\n\t\t\t\t\t\t\t\t<th class="text-right">[[admin/manage/users:users.reputation]]</th>\n\t\t\t\t\t\t\t\t<th class="text-right">[[admin/manage/users:users.flags]]</th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.joined]]</th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.last-online]]</th>\n\t\t\t\t\t\t\t\t<th>[[admin/manage/users:users.banned]]</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t'+i.blocks.users(t,a,n,e,s)+'\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t\t<ul class="pagination lv-pagination hidden-xs">\n    '+(n(a&&a.pagination&&a.pagination.pages)?"\n    "+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?'\n    <li>\n        <a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+"\n\n    "+i.blocks["pagination.pages"](t,a,n,e,s)+"\n\n    "+(n(a&&a.pagination&&a.pagination.pages)?"\n    "+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?'\n    <li>\n        <a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+'\n</ul>\n\n\n<ul class="pagination lv-pagination visible-xs">\n    '+(n(a&&a.pagination&&a.pagination.pages)?"\n    "+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":'\n    <li class="first disabled">\n\t\t<a href="#"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t')+"\n\n\t"+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?'\n\t<li class="first">\n\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li>\n        <a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t':"")+"\n\t":"")+'\n\n\n    <li component="pagination/select-page" class="page select-page">\n\t\t<a href="#">'+t.__escape(n(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+"</a>\n\t</li>\n\n    "+(n(a&&a.pagination&&a.pagination.pages)?"\n    "+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    <li class="last disabled">\n\t\t<a href="#"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t')+"\n\n\t"+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?'\n\t<li>\n        <a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n\t<li class="last">\n\t\t<a href="?page='+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t':"")+"\n\t":"")+"\n</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"}return i.blocks={"pagination.pages":function(e,s,i,t,a){return t(i(s&&s.pagination&&s.pagination.pages),function(t,a,n){return"\n        "+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].separator)?'\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t</li>\n\t\t':'\n        <li class="page'+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].active)?" active":"")+'" >\n            <a href="?'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].qs))+'" data-page="'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+'">'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+"</a>\n        </li>\n        ")+"\n    "})},users:function(e,s,i,t,a){return t(i(s&&s.users),function(t,a,n){return'\n\t\t\t\t\t\t\t<tr class="user-row">\n\t\t\t\t\t\t\t\t<th><input component="user/select/single" data-uid="'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].uid))+'" type="checkbox"/></th>\n\t\t\t\t\t\t\t\t<td class="text-right">'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].uid))+'</td>\n\t\t\t\t\t\t\t\t<td><i class="administrator fa fa-shield text-success'+(i(s&&s.users&&s.users[t]&&s.users[t].administrator)?"":" hidden")+'"></i><a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].userslug))+'"> '+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].username))+"</a></td>\n\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t"+(i(s&&s.config&&s.config.requireEmailConfirmation)?'\n\t\t\t\t\t\t\t\t<i class="validated fa fa-check text-success'+(i(s&&s.users&&s.users[t]&&s.users[t]["email:confirmed"])?"":" hidden")+'" title="validated"></i>\n\t\t\t\t\t\t\t\t<i class="notvalidated fa fa-times text-danger'+(i(s&&s.users&&s.users[t]&&s.users[t]["email:confirmed"])?" hidden":"")+'" title="not validated"></i>\n\t\t\t\t\t\t\t\t':"")+" "+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].email))+'</td>\n\t\t\t\t\t\t\t\t<td class="text-right">'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].postcount))+'</td>\n\t\t\t\t\t\t\t\t<td class="text-right">'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].reputation))+'</td>\n\t\t\t\t\t\t\t\t<td class="text-right">'+(i(s&&s.users&&s.users[t]&&s.users[t].flags)?e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].flags)):"0")+'</td>\n\t\t\t\t\t\t\t\t<td><span class="timeago" title="'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].joindateISO))+'"></span></td>\n\t\t\t\t\t\t\t\t<td><span class="timeago" title="'+e.__escape(i(s&&s.users&&s.users[t]&&s.users[t].lastonlineISO))+'"></span></td>\n\t\t\t\t\t\t\t\t<td class="text-center"><i class="ban fa fa-gavel text-danger'+(i(s&&s.users&&s.users[t]&&s.users[t].banned)?"":" hidden")+'"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t'})}},i});