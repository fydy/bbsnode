!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(i,r,a,t,n){return'<div class="row">\n\t<form role="form" class="category">\n\t\t<div class="">\n\t\t\t<p>\n\t\t\t\t[[admin/manage/categories:privileges.description]]\n\t\t\t</p>\n\n\t\t\t<div class="lead">\n\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\n\t\t\t\t<div component="category-selector" class="btn-group '+(a(r&&r.pullRight)?"pull-right":"")+'">\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t<span component="category-selector-selected">'+(a(r&&r.selectedCategory)?'<span class="fa-stack" style="'+i.__escape(n(r,i,"generateCategoryBackground",[a(r&&r.selectedCategory)]))+'"><i class="fa fa-fw fa-stack-1x '+i.__escape(a(r&&r.selectedCategory&&r.selectedCategory.icon))+'" style="color: '+i.__escape(a(r&&r.selectedCategory&&r.selectedCategory.color))+';"></i></span> '+i.__escape(a(r&&r.selectedCategory&&r.selectedCategory.name)):"\n\t\t[[topic:thread_tools.select_category]]")+'</span> <span class="caret"></span>\n\t</button>\n\t<div component="category-selector-search" class="hidden">\n\t\t<input type="text" class="form-control" autocomplete="off">\n\t</div>\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t<li component="category/no-matches" role="presentation" class="category hidden">\n\t\t\t<a role="menu-item">[[search:no-matches]]</a>\n\t\t</li>\n\t\t'+e.blocks.categories(i,r,a,t,n)+'\n\t</ul>\n</div>\n\t\t\t</div>\n\n\t\t\t<hr />\n\n\t\t\t<div class="privilege-table-container">\n\t\t\t\t'+(a(r&&r.cid)?'\n\t\t\t\t\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+e.blocks["privileges.labels.users"](i,r,a,t,n)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(a(r&&r.privileges&&r.privileges.users&&r.privileges.users.length)?"\n\t\t\t\t\t\t\t"+e.blocks["privileges.users"](i,r,a,t,n)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+'\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+e.blocks["privileges.labels.groups"](i,r,a,t,n)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+e.blocks["privileges.groups"](i,r,a,t,n)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\n\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+t(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users&&r.privileges.labels.users[t]&&r.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(a(r&&r.privileges&&r.privileges.users&&r.privileges.users.length)?"\n\t\t\t\t\t\t\t"+t(a(r&&r.privileges&&r.privileges.users),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-uid="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture))+'" title="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:bgColor"]))+';">'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username),a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/privileges:global.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+'\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+t(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups&&r.privileges.labels.groups[t]&&r.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+t(a(r&&r.privileges&&r.privileges.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+i.__escape(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+'" data-private="'+(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+i.__escape(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name),a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+i.__escape(a(r&&r.privileges&&r.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\n\t\t\t\t')+"\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n"}return e.blocks={"privileges.groups":function(i,r,a,t,n){return t(a(r&&r.privileges&&r.privileges.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+i.__escape(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+'" data-private="'+(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+i.__escape(a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name),a(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})},"privileges.labels.groups":function(i,r,a,t,e){return t(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups&&r.privileges.labels.groups[t]&&r.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})},"privileges.users":function(i,r,a,t,n){return t(a(r&&r.privileges&&r.privileges.users),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-uid="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture))+'" title="'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:bgColor"]))+';">'+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+i.__escape(a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username),a(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})},"privileges.labels.users":function(i,r,a,t,e){return t(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(a(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users&&r.privileges.labels.users[t]&&r.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})},categories:function(i,r,a,t,n){return t(a(r&&r.categories),function(t,e,s){return'\n\t\t<li role="presentation" class="category '+(a(r&&r.categories&&r.categories[t]&&r.categories[t].disabledClass)?"disabled":"")+'" data-cid="'+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].cid))+'" data-name="'+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].name))+'">\n\t\t\t<a role="menu-item">'+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].level))+'<span component="category-markup">'+(a(r&&r.categories&&r.categories[t]&&r.categories[t].icon)?'<span class="fa-stack" style="'+i.__escape(n(r,i,"generateCategoryBackground",[a(r&&r.categories&&r.categories[t])]))+'"><i style="color: '+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].icon))+'"></i></span>':"")+" "+i.__escape(a(r&&r.categories&&r.categories[t]&&r.categories[t].name))+"</span></a>\n\t\t</li>\n\t\t"})}},e});