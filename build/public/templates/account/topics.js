!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,a,s,e,i){return(s(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+n.blocks.breadcrumbs(t,a,s,e,i)+"\n</ol>\n":"")+'\n\n<div class="account user-topics">\n\t<div class="card user-profile-view" data-uid="'+t.__escape(s(a&&a.uid))+'">\n\t<div class="card-body cover" component="account/cover" style="background-image: url('+t.__escape(s(a&&a["cover:url"]))+"); background-position: "+t.__escape(s(a&&a["cover:position"]))+';">\n\t\t'+(s(a&&a.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-3x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-3x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-3x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n\n\t<div class="card-footer">\n\t\t<div class="profile-pic">\n\t        <div class="user-icon profile-header-img" style="'+(s(a&&a.picture)?"background-image: url("+t.__escape(s(a&&a.picture))+");  background-size: cover; background-repeat: no-repeat; background-position: center center;":"background-color: "+t.__escape(s(a&&a["icon:bgColor"]))+";")+'">'+(s(a&&a.picture)?"":t.__escape(s(a&&a["icon:text"])))+'\n\t        </div>\n\t        <span component="user/status" class="status '+t.__escape(s(a&&a.status))+'" title="[[global:'+t.__escape(s(a&&a.status))+']]"></span>\n        </div>\n\n        <div class="user-info">\n\t        <h3 class="fullname">'+(s(a&&a.fullname)?t.__escape(s(a&&a.fullname)):t.__escape(s(a&&a.username)))+'</h3>\n\t\t\t<h4 class="username">'+(s(a&&a.banned)?"[[user:banned]]":"@"+t.__escape(s(a&&a.username)))+"</h4>\n\t\t</div>\n\n        "+(s(a&&a.template&&a.template["account/profile"])?'\n\t\t<div class="account-stats">\n\t\t\t'+(s(a&&a["reputation:disabled"])?"":'\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(s(a&&a.reputation))+'">'+t.__escape(s(a&&a.reputation))+'</div>\n\t\t\t\t<span class="stat-label">[[global:reputation]]</span>\n\t\t\t</div>\n\t\t\t')+'\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(s(a&&a.postcount))+'">'+t.__escape(s(a&&a.postcount))+'</div>\n\t\t\t\t<span class="stat-label">[[global:posts]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(s(a&&a.profileviews))+'">'+t.__escape(s(a&&a.profileviews))+'</div>\n\t\t\t\t<span class="stat-label">[[user:profile_views]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(s(a&&a.followerCount))+'">'+t.__escape(s(a&&a.followerCount))+'</div>\n\t\t\t\t<span class="stat-label">[[user:followers]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number"  title="'+t.__escape(s(a&&a.followingCount))+'">'+t.__escape(s(a&&a.followingCount))+'</div>\n\t\t\t\t<span class="stat-label">[[user:following]]</span>\n\t\t\t</div>\n\t\t</div>\n\t\t'+(s(a&&a.loggedIn)?"\n\t\t"+(s(a&&a.isSelf)?"":"\n\t\t"+(s(a&&a.banned)?"":"\n\t\t"+(s(a&&a.config&&a.config.disableChat)?"":'\n\t\t<a component="account/chat" href="#" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-comment-o"></i> [[user:chat]]</a>\n\t\t')+'\n\t\t<a id="follow-btn" component="account/follow" href="#" class="btn btn-success btn-sm '+(s(a&&a.isFollowing)?"hide":"")+'">[[user:follow]]</a>\n\t\t<a id="unfollow-btn" component="account/unfollow" href="#" class="btn btn-warning btn-sm '+(s(a&&a.isFollowing)?"":"hide")+'">[[user:unfollow]]</a>\n\t\t')+"\n\t\t")+"\n\t\t":"")+"\n\n\t\t":"\n\t\t<hr/>\n\t\t")+'\n\n\t\t<div class="btn-group account-fab">\n\t<button type="button" class="btn btn-primary btn-icon dropdown-toggle" data-toggle="dropdown">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu pull-right" role="menu">\n\t\t<li>\n\t\t\t<a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'" class="inline-block" id="profile"><i class="fa fa-fw fa-user"></i> [[user:profile]]</a>\n\t\t</li>\n\t\t'+(s(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/edit"><i class="fa fa-fw fa-gear"></i> [[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/settings"><i class="fa fa-fw fa-edit"></i> [[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(s(a&&a.isSelf)?"":"\n\t\t"+(s(a&&a.banned)?"":'\n\t\t<li>\n  \t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n  \t\t</li>\n  \t\t<li>\n\t\t\t<a component="account/block" href="#">'+(s(a&&a.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+"</a>\n\t\t</li>\n\t\t")+"\n\n\t\t"+(s(a&&a.canBan)?'\n\t\t<li class="'+(s(a&&a.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#"><i class="fa fa-fw fa-ban"></i> [[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(s(a&&a.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#"><i class="fa fa-fw fa-ban"></i> [[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(s(a&&a.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class=""><i class="fa fa-fw fa-trash-o"></i> [[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/following"><i class="fa fa-fw fa-users"></i> [[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/followers"><i class="fa fa-fw fa-users"></i> [[user:followers]]</a></li>\n\t\t'+(s(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/blocks"><i class="fa fa-fw fa-ban"></i> [[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/topics"><i class="fa fa-fw fa-book"></i> [[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/posts"><i class="fa fa-fw fa-pencil"></i> [[global:posts]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/best"><i class="fa fa-fw fa-pencil"></i> [[global:best]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/groups"><i class="fa fa-fw fa-users"></i> [[global:header.groups]]</a></li>\n\t\t'+(s(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/bookmarks"><i class="fa fa-fw fa-heart"></i> [[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/watched"><i class="fa fa-fw fa-eye"></i> [[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/ignored"><i class="fa fa-fw fa-eye-slash"></i>[[user:ignored]]</a></li>\n\t\t'+(s(a&&a["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/upvoted"><i class="fa fa-fw fa-thumbs-o-up"></i> [[global:upvoted]]</a></li>\n\t\t'+(s(a&&a["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/downvoted"><i class="fa fa-fw fa-thumbs-o-down"></i> [[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(s(a&&a.userslug))+'/uploads"><i class="fa fa-fw fa-upload"></i> [[global:uploads]]</a></li>\n\t\t':"")+"\n\t\t"+n.blocks.profile_links(t,a,s,e,i)+'\n\t</ul>\n</div>\n\n\t</div>\n</div>\n\n\t\n\t<div class="card">\n\t\t<div class="card-header ch-alt">\n\t\t\t<i class="fa fa-fw fa-book"></i> '+t.__escape(s(a&&a.title))+'\n\t\t</div>\n\t\t<div class="listview lv-bordered lv-lg">\n\t\t\t'+(s(a&&a.topics&&a.topics.length)?"":'\n\t\t\t\t<div class="alert alert-warning">'+t.__escape(s(a&&a.noItemsFoundKey))+"</div>\n\t\t\t")+'\n\t\t\t<div class="lv-body" component="category" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+t.__escape(s(a&&a.nextStart))+'">\n\t<meta itemprop="itemListOrder" content="descending">\n\t'+n.blocks.topics(t,a,s,e,i)+"\n</div>\n\n\t\t</div>\n\t</div>\n\n\t"+(s(a&&a.config&&a.config.usePagination)?'\n\t\t<ul class="pagination lv-pagination hidden-xs">\n    '+(s(a&&a.pagination&&a.pagination.pages)?"\n    "+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?'\n    <li>\n        <a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+"\n\n    "+n.blocks["pagination.pages"](t,a,s,e,i)+"\n\n    "+(s(a&&a.pagination&&a.pagination.pages)?"\n    "+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?'\n    <li>\n        <a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+'\n</ul>\n\n\n<ul class="pagination lv-pagination visible-xs">\n    '+(s(a&&a.pagination&&a.pagination.pages)?"\n    "+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":'\n    <li class="first disabled">\n\t\t<a href="#"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t')+"\n\n\t"+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?'\n\t<li class="first">\n\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li>\n        <a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t':"")+"\n\t":"")+'\n\n\n    <li component="pagination/select-page" class="page select-page">\n\t\t<a href="#">'+t.__escape(s(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(s(a&&a.pagination&&a.pagination.pageCount))+"</a>\n\t</li>\n\n    "+(s(a&&a.pagination&&a.pagination.pages)?"\n    "+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    <li class="last disabled">\n\t\t<a href="#"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t')+"\n\n\t"+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?'\n\t<li>\n        <a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n\t<li class="last">\n\t\t<a href="?page='+t.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t':"")+"\n\t":"")+"\n</ul>\n\t":"")+"\n</div>"}return n.blocks={"pagination.pages":function(e,i,n,t,a){return t(n(i&&i.pagination&&i.pagination.pages),function(t,a,s){return"\n        "+(n(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t</li>\n\t\t':'\n        <li class="page'+(n(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n            <a href="?'+e.__escape(n(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+e.__escape(n(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+e.__escape(n(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n        </li>\n        ")+"\n    "})},topics:function(i,n,c,s,o){return s(c(n&&n.topics),function(e,t,a){return'\n\t<div component="category/topic" class="lv-item media row clearfix category-item '+i.__escape(o(n,i,"generateTopicClass",[c(n&&n.topics&&n.topics[e])]))+'" data-tid="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tid))+'" data-index="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].index))+'" data-cid="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].cid))+'" itemprop="itemListElement">\n\t\t<meta itemprop="name" content="'+i.__escape(o(n,i,"stripTags",[c(n&&n.title)]))+'">\n\t\t'+(c(n&&n.showSelect)?'\n        <div class="checkbox pull-left" component="topic/select">\n            <label>\n                <div class="select"></div>\n                <i class="input-helper"></i>\n            </label>\n        </div>\n        ':"")+'\n\n\t\t<div class="pull-left hidden-xs">\n\t\t\t'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].thumb)?'\n\t\t\t<img src="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].thumb))+'" class="lv-img" alt="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.username))+'" />\n\t\t\t':'\n        \t<a href="'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.userslug)?i.__escape(c(n&&n.config&&n.config.relative_path))+"/user/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.userslug)):"#")+'">\n            \t'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.picture)?'\n                <img class="user-avatar" src="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.picture))+'" alt="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.username))+'" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.username))+'" />\n                ':'\n                <div class="user-icon" style="background-color: '+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user["icon:bgColor"]))+';">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user["icon:text"]))+"</div>\n                ")+"\n        \t</a>\n        \t")+'\n    \t</div>\n    \t<div class="media-body">\n    \t\t<div class="lv-title" component="topic/header">\n    \t\t\t<strong><i component="topic/pinned" class="fa fa-thumb-tack '+(c(n&&n.topics&&n.topics[e]&&n.topics[e].pinned)?"":"hide")+'"></i>\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(c(n&&n.topics&&n.topics[e]&&n.topics[e].locked)?"":"hide")+'"></i></strong>\n\t\t\t\t'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].noAnchor)?'\n\t\t\t\t<span class="topic-title">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].title))+"</span>\n\t\t\t\t":'\n\t\t\t\t<a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/topic/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].slug))+(c(n&&n.topics&&n.topics[e]&&n.topics[e].bookmark)?"/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].bookmark)):"")+'"><span class="topic-title">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].title))+"</span></a>\n\t\t\t\t")+"\n\t\t\t</div>\n\n\t\t\t"+(c(n&&n.template&&n.template.category)?'\n\t\t\t<small>\n            \t[[global:posts]] <span class="human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].postcount))+'"></span> | [[global:views]] <span class="human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].viewcount))+'"></span> |\n            \t'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.uid)?'\n\t\t\t\t<a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/user/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.userslug))+'"><strong>'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.username))+"</strong></a>\n\t\t\t\t":"\n\t\t\t\t<strong>[[global:guest]]</strong>\n\t\t\t\t")+'\n\t\t\t\t<span class="timeago" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].timestampISO))+'"></span>\n\t\t\t</small>\n\t\t\t':"")+"\n\n\t\t\t"+(c(n&&n.template&&n.template.category)?"":'\n\t\t\t<small class="lv-small">\n\t\t\t\t<span class="hidden-xs">[[global:posts]] <span class="human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].postcount))+'"></span> | [[global:views]] <span class="human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].viewcount))+'"></span> | </span>\n\t\t\t\t<strong>'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].user&&n.topics[e].user.username))+'</strong> <a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/category/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].category&&n.topics[e].category.slug))+'">[[global:posted_in, '+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].category&&n.topics[e].category.name))+']] <i class="fa '+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].category&&n.topics[e].category.icon))+'"></i></a> <span class="timeago" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].timestampISO))+'"></span>\n\t\t\t</small>\n\t\t\t')+'\n\n\t\t\t<div class="lv-attrs hidden-xs">\n                '+(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags.length)?"\n\t\t\t\t"+(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags)?s(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags),function(t,a,s){return'\n\t\t\t\t<div class="pull-left tag-container">\n\t\t\t\t\t<a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/tags/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].value))+'">\n\t\t\t\t\t<span class="tag-item" data-tag="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].value))+'" style="'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].color)?"color: "+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].color))+";":"")+(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].bgColor)?"background-color: "+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].bgColor))+";":"")+'">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].value))+'</span><span class="tag-topic-count human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].score))+'">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].tags&&n.topics[e].tags[t]&&n.topics[e].tags[t].score))+"</span></a>\n\t\t\t\t</div>\n\t\t\t\t"}):s(c(n&&n.tags),function(t,a,s){return'\n\t\t\t\t<div class="pull-left tag-container">\n\t\t\t\t\t<a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/tags/"+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.value))+'">\n\t\t\t\t\t<span class="tag-item" data-tag="'+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.value))+'" style="'+(c(n&&n.topics&&n.topics.tags&&n.topics.tags.color)?"color: "+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.color))+";":"")+(c(n&&n.topics&&n.topics.tags&&n.topics.tags.bgColor)?"background-color: "+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.bgColor))+";":"")+'">'+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.value))+'</span><span class="tag-topic-count human-readable-number" title="'+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.score))+'">'+i.__escape(c(n&&n.topics&&n.topics.tags&&n.topics.tags.score))+"</span></a>\n\t\t\t\t</div>\n\t\t\t\t"}))+"\n\t\t\t\t":"")+'\n            </div>\n\n\t\t\t<div class="lv-actions actions hidden-xs">\n                <ul>\n\t                '+(c(n&&n.topics&&n.topics[e]&&n.topics[e].unreplied)?'\n\t\t\t\t\t<li class="lv-small">[[category:no_replies]]</li>\n\t\t\t\t\t':"\n\t\t\t\t\t"+(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.index)?'\n\t\t\t\t\t<li class="lv-small">\n\t\t\t\t\t\t<a href="'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.userslug)?i.__escape(c(n&&n.config&&n.config.relative_path))+"/user/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.userslug)):"#")+'">\n\t\t\t\t\t\t\t'+(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.picture)?'\n\t\t\t                <img class="user-picture" src="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.picture))+'" alt="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.username))+'" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user.username))+'" />\n\t\t\t                ':'\n\t\t\t                <div class="user-icon" style="background-color: '+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user["icon:bgColor"]))+';">'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.user&&n.topics[e].teaser.user["icon:text"]))+"</div>\n\t\t\t                ")+'\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href="'+i.__escape(c(n&&n.config&&n.config.relative_path))+"/topic/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].slug))+"/"+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.index))+'">\n\t\t\t\t\t\t\t<span class="timeago" title="'+i.__escape(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.timestampISO))+'"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t':"")+"\n\t\t\t\t\t"+(c(n&&n.topics&&n.topics[e]&&n.topics[e].teaser&&n.topics[e].teaser.index)?"":'\n\t\t\t\t\t<li class="lv-small">[[category:no_replies]]</li>\n\t\t\t\t\t')+"\n\t\t\t\t\t")+"\n                </ul>\n            </div>\n\t\t</div>\n\t</div>\n\t"})},profile_links:function(e,i,n,t,a){return t(n(i&&i.profile_links),function(t,a,s){return"\n\t\t"+(0===a?'\n  \t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+e.__escape(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].id))+'" class="plugin-link '+(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].public)?"public":"private")+'"><a href="'+e.__escape(n(i&&i.config&&i.config.relative_path))+"/user/"+e.__escape(n(i&&i.userslug))+"/"+e.__escape(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].route))+'">'+(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon)?'<i class="fa fa-fw '+e.__escape(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon))+'"></i> ':"")+e.__escape(n(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(e,i,n,t,a){return t(n(i&&i.breadcrumbs),function(t,a,s){return"\n\t<li"+(a===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(a===s-1?'class="active"':"")+">\n\t\t"+(a!==s-1?'<a href="'+e.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+e.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(a===s-1?"\n\t\t\t\t"+(n(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(n(i&&i.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(n(i&&i.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==s-1?"</a>":"")+"\n\t</li>\n\t"})}},n});