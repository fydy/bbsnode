!function(a){"object"==typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd&&define(a)}(function(){function i(a,n,t,e,s){return(t(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+i.blocks.breadcrumbs(a,n,t,e,s)+"\n</ol>\n":"")+'\n<div class="users">\n\n\t<ul id="users-container" class="users-container">\n\t\t'+i.blocks.users(a,n,t,e,s)+'\n\n\t</ul>\n\n\t<ul class="pagination lv-pagination hidden-xs">\n    '+(t(n&&n.pagination&&n.pagination.pages)?"\n    "+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?'\n    <li>\n        <a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+"\n\n    "+i.blocks["pagination.pages"](a,n,t,e,s)+"\n\n    "+(t(n&&n.pagination&&n.pagination.pages)?"\n    "+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?'\n    <li>\n        <a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ':'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    ')+"\n    ":"")+'\n</ul>\n\n\n<ul class="pagination lv-pagination visible-xs">\n    '+(t(n&&n.pagination&&n.pagination.pages)?"\n    "+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":'\n    <li class="first disabled">\n\t\t<a href="#"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li class="disabled">\n        <a href="#" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t')+"\n\n\t"+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?'\n\t<li class="first">\n\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t</li>\n\t<li>\n        <a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'" aria-label="Previous">\n            <i class="fa fa-chevron-left"></i>\n        </a>\n    </li>\n\t':"")+"\n\t":"")+'\n\n\n    <li component="pagination/select-page" class="page select-page">\n\t\t<a href="#">'+a.__escape(t(n&&n.pagination&&n.pagination.currentPage))+" / "+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+"</a>\n\t</li>\n\n    "+(t(n&&n.pagination&&n.pagination.pages)?"\n    "+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":'\n    <li class="disabled">\n        <a href="#" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n    <li class="last disabled">\n\t\t<a href="#"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t')+"\n\n\t"+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?'\n\t<li>\n        <a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'" aria-label="Next">\n            <i class="fa fa-chevron-right"></i>\n        </a>\n    </li>\n\t<li class="last">\n\t\t<a href="?page='+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t</li>\n\t':"")+"\n\t":"")+"\n</ul>\n</div>"}return i.blocks={"pagination.pages":function(e,s,i,a,n){return a(i(s&&s.pagination&&s.pagination.pages),function(a,n,t){return"\n        "+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[a]&&s.pagination.pages[a].separator)?'\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t</li>\n\t\t':'\n        <li class="page'+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[a]&&s.pagination.pages[a].active)?" active":"")+'" >\n            <a href="?'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[a]&&s.pagination.pages[a].qs))+'" data-page="'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[a]&&s.pagination.pages[a].page))+'">'+e.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[a]&&s.pagination.pages[a].page))+"</a>\n        </li>\n        ")+"\n    "})},users:function(e,s,i,a,n){return a(i(s&&s.users),function(a,n,t){return'\n<li class="users-box registered-user" data-uid="'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].uid))+'">\n\t<a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].userslug))+'">\n\t\t'+(i(s&&s.users&&s.users[a]&&s.users[a].picture)?'\n\t\t<img class="user-picture" src="'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].picture))+'" alt="'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].username))+'" />\n\t\t':'\n\t\t<div class="user-icon user-picture" style="background-color: '+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a]["icon:bgColor"]))+';">'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a]["icon:text"]))+"</div>\n\t\t")+'\n\t</a>\n\t<br/>\n\t<div class="user-info">\n\t\t<div>\n\t\t\t<i component="user/status" class="status '+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].status))+'" title="[[global:'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].status))+']]"></i>\n\t\t\t<a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].userslug))+'"> '+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].username))+"</a>\n\t\t</div>\n\n\t\t"+(i(s&&s.section_joindate)?'\n\t\t<div title="joindate" class="joindate">\n\t\t\t<i class="fa fa-clock"></i>\n\t\t\t<span class="timeago" title="'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].joindateISO))+'"></span>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(i(s&&s["section_sort-reputation"])?'\n\t\t<div title="reputation" class="reputation">\n\t\t\t<i class="fa fa-star"></i>\n\t\t\t<span class="formatted-number">'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].reputation))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(i(s&&s["section_sort-posts"])?'\n\t\t<div title="post count" class="post-count">\n\t\t\t<i class="fa fa-pencil"></i>\n\t\t\t<span class="formatted-number">'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].postcount))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(i(s&&s.section_flagged)?'\n\t\t<div title="flag count" class="flag-count">\n\t\t\t<i class="fa fa-flag"></i>\n\t\t\t<span class="formatted-number"><a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/posts/flags?byUsername="+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].username))+'">'+e.__escape(i(s&&s.users&&s.users[a]&&s.users[a].flags))+"</a></span>\n\t\t</div>\n\t\t":"")+"\n\t</div>\n</li>\n"})},breadcrumbs:function(e,s,i,a,n){return a(i(s&&s.breadcrumbs),function(a,n,t){return"\n\t<li"+(n===t-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(n===t-1?'class="active"':"")+">\n\t\t"+(n!==t-1?'<a href="'+e.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[a]&&s.breadcrumbs[a].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+e.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[a]&&s.breadcrumbs[a].text))+"\n\t\t\t\t"+(n===t-1?"\n\t\t\t\t"+(i(s&&s["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(s&&s.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(i(s&&s.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n!==t-1?"</a>":"")+"\n\t</li>\n\t"})}},i});