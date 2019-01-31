!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,s,a,e,n){return'<div class="row">\n\t<div class="col-xs-12">\n\t\t<div class="registration panel panel-primary">\n\t\t\t<div class="panel-heading">\n\t\t\t\t[[admin/manage/registration:queue]]\n\t\t\t</div>\n\t\t\t'+(a(s&&s.users&&s.users.length)?"":'\n\t\t\t<p class="panel-body">\n\t\t\t\t[[admin/manage/registration:description, '+t.__escape(a(s&&s.config&&s.config.relative_path))+"/admin/settings/user#user-registration]]\n\t\t\t</p>\n\t\t\t")+'\n\t\t\t<div class="table-responsive">\n\t\t\t\t<table class="table table-striped users-list">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.name]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.email]]</th>\n\t\t\t\t\t\t\t<th class="hidden-xs">[[admin/manage/registration:list.ip]]</th>\n\t\t\t\t\t\t\t<th class="hidden-xs">[[admin/manage/registration:list.time]]</th>\n\t\t\t\t\t\t\t'+i.blocks.customHeaders(t,s,a,e,n)+"\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t"+i.blocks.users(t,s,a,e,n)+'\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<ul class="pagination lv-pagination hidden-xs">\n    '+(a(s&&s.pagination&&s.pagination.pages)?"\n    "+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?'\n    <li>\n        <a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+"\n\n    "+i.blocks["pagination.pages"](t,s,a,e,n)+"\n\n    "+(a(s&&s.pagination&&s.pagination.pages)?"\n    "+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?'\n    <li>\n        <a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+'\n</ul>\n\n\n<ul class="pagination lv-pagination visible-xs">\n    '+(a(s&&s.pagination&&s.pagination.pages)?"\n    "+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?"":'\n    <li class="first disabled">\n\t\t<a href="#"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t')+"\n\n\t"+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?'\n\t<li class="first">\n\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li>\n        <a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t':"")+"\n\t":"")+'\n\n\n    <li component="pagination/select-page" class="page select-page">\n\t\t<a href="#">'+t.__escape(a(s&&s.pagination&&s.pagination.currentPage))+" / "+t.__escape(a(s&&s.pagination&&s.pagination.pageCount))+"</a>\n\t</li>\n\n    "+(a(s&&s.pagination&&s.pagination.pages)?"\n    "+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?"":'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    <li class="last disabled">\n\t\t<a href="#"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t')+"\n\n\t"+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?'\n\t<li>\n        <a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n\t<li class="last">\n\t\t<a href="?page='+t.__escape(a(s&&s.pagination&&s.pagination.pageCount))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t':"")+"\n\t":"")+'\n</ul>\n\t\t</div>\n\n\t\t<div class="invitations panel panel-success">\n\t\t\t<div class="panel-heading">\n\t\t\t\t[[admin/manage/registration:invitations]]\n\t\t\t</div>\n\t\t\t<p class="panel-body">\n\t\t\t\t[[admin/manage/registration:invitations.description]]\n\t\t\t</p>\n\t\t\t<div class="table-responsive">\n\t\t\t\t<table class="table table-striped invites-list">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.inviter-username]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-email]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-username]]</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t'+i.blocks.invites(t,s,a,e,n)+"\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return i.blocks={invites:function(n,i,r,a,t){return a(r(i&&i.invites),function(e,t,s){return"\n\t\t\t\t\t\t"+(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.invitations)?a(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.invitations),function(t,s,a){return'\n\t\t\t\t\t\t<tr data-invitation-mail="'+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.invitations&&i.invites[e].invites.invitations[t]&&i.invites[e].invites.invitations[t].email))+'"\n\t\t\t\t\t\t\t\tdata-invited-by="'+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.username))+'">\n\t\t\t\t\t\t\t<td class ="invited-by">'+(0===s?n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.username)):"")+"</td>\n\t\t\t\t\t\t\t<td>"+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.invitations&&i.invites[e].invites.invitations[t]&&i.invites[e].invites.invitations[t].email))+"</td>\n\t\t\t\t\t\t\t<td>"+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invites&&i.invites[e].invites.invitations&&i.invites[e].invites.invitations[t]&&i.invites[e].invites.invitations[t].username))+'\n\t\t\t\t\t\t\t\t<div class="btn-group pull-right">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t'}):a(r(i&&i.invites&&i.invites[e]&&i.invites[e].invitations),function(t,s,a){return'\n\t\t\t\t\t\t<tr data-invitation-mail="'+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invitations&&i.invites[e].invitations[t]&&i.invites[e].invitations[t].email))+'"\n\t\t\t\t\t\t\t\tdata-invited-by="'+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].username))+'">\n\t\t\t\t\t\t\t<td class ="invited-by">'+(0===s?n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].username)):"")+"</td>\n\t\t\t\t\t\t\t<td>"+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invitations&&i.invites[e].invitations[t]&&i.invites[e].invitations[t].email))+"</td>\n\t\t\t\t\t\t\t<td>"+n.__escape(r(i&&i.invites&&i.invites[e]&&i.invites[e].invitations&&i.invites[e].invitations[t]&&i.invites[e].invitations[t].username))+'\n\t\t\t\t\t\t\t\t<div class="btn-group pull-right">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t'}))+"\n\t\t\t\t\t\t"})},"pagination.pages":function(e,n,i,t,s){return t(i(n&&n.pagination&&n.pagination.pages),function(t,s,a){return"\n        "+(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].separator)?'\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t</li>\n\t\t':'\n        <li class="page'+(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].active)?" active":"")+'" >\n            <a href="?'+e.__escape(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].qs))+'" data-page="'+e.__escape(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+'">'+e.__escape(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+"</a>\n        </li>\n        ")+"\n    "})},users:function(n,i,r,a,t){return a(r(i&&i.users),function(e,t,s){return'\n\t\t\t\t\t\t<tr data-username="'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].username))+'">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t'+(r(i&&i.users&&i.users[e]&&i.users[e].usernameSpam)?'\n\t\t\t\t\t\t\t\t<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.username-spam, '+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.username&&i.users[e].spamData.username.frequency))+", "+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.username&&i.users[e].spamData.username.appears))+", "+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.username&&i.users[e].spamData.username.confidence))+']]"></i>\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i>\n\t\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t\t\t"+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].username))+"\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t"+(r(i&&i.users&&i.users[e]&&i.users[e].emailSpam)?'\n\t\t\t\t\t\t\t\t<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.email-spam, '+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.email&&i.users[e].spamData.email.frequency))+", "+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.email&&i.users[e].spamData.email.appears))+']]"></i>\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i>\n\t\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t\t\t"+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].email))+'\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="hidden-xs">\n\t\t\t\t\t\t\t\t'+(r(i&&i.users&&i.users[e]&&i.users[e].ipSpam)?'\n\t\t\t\t\t\t\t\t<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.ip-spam, '+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.ip&&i.users[e].spamData.ip.frequency))+", "+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].spamData&&i.users[e].spamData.ip&&i.users[e].spamData.ip.appears))+']]"></i>\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i>\n\t\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t\t\t"+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ip))+"\n\t\t\t\t\t\t\t\t"+(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch)?a(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch),function(t,s,a){return"\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t"+(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t].picture)?'\n\t\t\t\t\t\t\t\t<img src="'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t].picture))+'" class="user-img"/>\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="user-img avatar avatar-sm" style="background-color: '+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t]["icon:bgColor"]))+';">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t\t<a href="/uid/'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t].uid))+'">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.ipMatch&&i.users[e].users.ipMatch[t]&&i.users[e].users.ipMatch[t].username))+"</a>\n\t\t\t\t\t\t\t\t"}):a(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch),function(t,s,a){return"\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t"+(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t].picture)?'\n\t\t\t\t\t\t\t\t<img src="'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t].picture))+'" class="user-img"/>\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="user-img avatar avatar-sm" style="background-color: '+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t]["icon:bgColor"]))+';">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t\t<a href="/uid/'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t].uid))+'">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].ipMatch&&i.users[e].ipMatch[t]&&i.users[e].ipMatch[t].username))+"</a>\n\t\t\t\t\t\t\t\t"}))+'\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="hidden-xs">\n\t\t\t\t\t\t\t\t<span class="timeago" title="'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].timestampISO))+'"></span>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t'+(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.customRows)?a(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.customRows),function(t,s,a){return'\n\t\t\t\t\t\t\t<td class="hidden-xs">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].users&&i.users[e].users.customRows&&i.users[e].users.customRows[t]&&i.users[e].users.customRows[t].value))+"</td>\n\t\t\t\t\t\t\t"}):a(r(i&&i.users&&i.users[e]&&i.users[e].customRows),function(t,s,a){return'\n\t\t\t\t\t\t\t<td class="hidden-xs">'+n.__escape(r(i&&i.users&&i.users[e]&&i.users[e].customRows&&i.users[e].customRows[t]&&i.users[e].customRows[t].value))+"</td>\n\t\t\t\t\t\t\t"}))+'\n\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="btn-group pull-right">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-check"></i></button>\n\t\t\t\t\t\t\t\t\t<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t'})},customHeaders:function(e,n,i,t,s){return t(i(n&&n.customHeaders),function(t,s,a){return'\n\t\t\t\t\t\t\t<th class="hidden-xs">'+e.__escape(i(n&&n.customHeaders&&n.customHeaders[t]&&n.customHeaders[t].label))+"</th>\n\t\t\t\t\t\t\t"})}},i});